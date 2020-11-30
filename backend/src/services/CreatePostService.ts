import { getRepository } from 'typeorm';
import AppError from '../erros/AppError';
import Post from '../models/Post';

interface RequestDTO {
    author: string;
    title: string;
    body: string;
}

class CreatePostService {
    public async execute({ author, title, body }: RequestDTO): Promise<Post> {


        const postsRepository = getRepository(Post);


        try {
            const postObject = postsRepository.create({
                author,
                title,
                body
            });

            console.log(postObject);

            await postsRepository.save(postObject);

            return postObject;

        } catch (error) {
            console.error(error);
            throw new AppError('Server error');
        }
    }
}

export default CreatePostService;