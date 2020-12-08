import { Router } from 'express';
// import { getCustomRepository } from 'typeorm';
import Audio from '../models/Audio';
// import path from 'path'
// import fs from 'fs';
import 'dotenv/config';

import CreateAudioFileService from '../services/CreateAudioFileService';
import AudiosRepository from '../repository/AudiosRepository';

const apiRouter = Router();

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
apiRouter.get('/', async (req, res, next) => {
  // https://cloud.ibm.com/apidocs/text-to-speech?code=node#synthesize
  console.log("req.query", req.query)

  const synthesizeParams = {
    // text: 'Hello world',
    text: req.query.text,
    accept: 'audio/wav',
    // voice: 'en-US_AllisonV3Voice', // english voice
    voice: 'pt-BR_IsabelaVoice',   // portuguese voice
  };

  const post_id = Number(req.query.id);

  // VOICE PORTUGUES
  // ?voice=pt-BR_IsabelaVoice

  textToSpeech.synthesize(synthesizeParams)
    .then(response => {

      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then( async (buffer) => {
      const base64 = buffer.toString('base64');

      const apiRepository = new AudiosRepository();

      const audioExists = await apiRepository.findByPostId(post_id)

      if (audioExists) {
        // console.log(audioExists)
        console.log('audio exists', audioExists)
        res.send(audioExists.audioStringBase64)
      } else {

        // caso nao exista criar objeto Audio
        const audioService = new CreateAudioFileService();
        const audio = await audioService.execute({ post_id, audioStringBase64: base64 })
  
        //==================saving audio file=========================
        // to write the file inside the application use the code below:
        // fs.writeFileSync(`upload/${req.query.id}.wav`, buffer);
        // fs.writeFileSync(`upload/${req.query.id}.wav`, base64, { encoding: "base64" }, function (err) {
        //   if (err) {
        //     console.log(err);
        //   } else {
        //     console.log("audio file created");
        //   }
        // })
        // ============================================================
  
        res.send(audio.audioStringBase64);
        // res.send(base64)
      }

    })
    .catch(err => {
      console.log('error:', err);
    });
});
//========================================================


export default apiRouter;