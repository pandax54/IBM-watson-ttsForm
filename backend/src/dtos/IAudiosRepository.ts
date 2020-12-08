import Audio from '../models/Audio';
import ICreateAudioDTO from '../dtos/ICreateAudioDTO';

export default interface IAudioRepository {
  create(post_id: ICreateAudioDTO): Promise<Audio>;
  findByPostId( post_id: number): Promise<Audio | undefined>;
}