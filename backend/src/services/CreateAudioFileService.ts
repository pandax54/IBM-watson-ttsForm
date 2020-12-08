import AppError from '../erros/AppError';
import Audio from '../models/Audio';
import AudiosRepository from '../repository/AudiosRepository';

interface RequestDTO {
    audioStringBase64: string;
    post_id: number;
}

class CreateAudioFileService {
    public async execute({ post_id, audioStringBase64 }: RequestDTO): Promise<Audio> {


        const audiosRepository = new AudiosRepository();


        try {
            const audioObject = audiosRepository.create({
                audioStringBase64,
                post_id
            });

            // console.log(audioObject);

            return audioObject;

        } catch (error) {
            console.error(error);
            throw new AppError('Server error');
        }
    }
}

export default CreateAudioFileService;