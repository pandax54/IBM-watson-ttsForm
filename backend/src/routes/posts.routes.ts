import { Router } from 'express';
import { getRepository } from 'typeorm';
import Posts from '../models/Post';

import CreatePostService from '../services/CreatePostService';

const postsRouter = Router();


postsRouter.get('/', async (request, response) => {

  const postsRepository = getRepository(Posts);
  const posts = await postsRepository.find();

  return response.json(posts);
});



postsRouter.post('/', async (request, response) => {
  try {
    const { author, title, body } = request.body;

    const createPost = new CreatePostService();
    const link = await createPost.execute({ author, title, body });

    return response.json();
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});



export default postsRouter;