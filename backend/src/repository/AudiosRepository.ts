import { getRepository, Repository, Raw } from 'typeorm';

import IAudiosRepository from '../dtos/IAudiosRepository';
import ICreateAudioDTO from '../dtos/ICreateAudioDTO';

import AudioFile from '../models/Audio';

class AudiosRepository implements IAudiosRepository {

  private ormRepository: Repository<AudioFile>;

  constructor() {
    this.ormRepository = getRepository(AudioFile);
  }

  public async findByPostId(
    post_id: number
  ): Promise<AudioFile | undefined> {
    const findAudio = await this.ormRepository.findOne({
      where: { post_id },
    });

    return findAudio;
  }

  public async create({
    post_id,
    audioStringBase64
  }: ICreateAudioDTO): Promise<AudioFile> {
    const audio = this.ormRepository.create({
      post_id,
      audioStringBase64
    });

    await this.ormRepository.save(audio);

    return audio;
  }
}

export default AudiosRepository;