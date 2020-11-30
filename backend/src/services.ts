import 'reflect-metadata';
import path from 'path'
import fs from 'fs';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import 'dotenv/config';

import './database';
import AppError from './erros/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, "..", 'uploads')));
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
});

// =====================
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1.js');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  version: '2018-04-05',
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_IAM_APIKEY || 'you API key',
  }),
  url: process.env.TEXT_TO_SPEECH_URL || 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/da231fcd-486c-4539-9332-b4673e63279d/v1/synthesize',
});

//=====
app.get('/api/v3/synthesize', async (req, res, next) => {
  // https://cloud.ibm.com/apidocs/text-to-speech?code=node#synthesize
  console.log("req.query", req.query)

  const synthesizeParams = {
    // text: 'Hello world',
    text: req.query.text,
    accept: 'audio/wav',
    // voice: 'en-US_AllisonV3Voice', // english voice
    voice: 'pt-BR_IsabelaVoice',   // portuguese voice
  };

  // VOICE PORTUGUES
  // ?voice=pt-BR_IsabelaVoice

  textToSpeech.synthesize(synthesizeParams)
    .then(response => {

      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      const base64 = buffer.toString('base64');

      //==================saving audio file=========================
      // to write the file inside the application use the code below:
      // fs.writeFileSync(`upload/${req.query.id}.wav`, buffer);
      fs.writeFileSync(`upload/${req.query.id}.wav`, base64, { encoding: "base64" }, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("audio file created");
        }
      })

      res.send(base64)
    })
    .catch(err => {
      console.log('error:', err);
    });
});
//========================================================

app.listen(3333, () => console.log('Server is up!'));
