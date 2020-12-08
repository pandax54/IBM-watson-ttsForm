import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne
} from 'typeorm';

import Post from './Post';

@Entity('audioFile')
class AudioFile {


@PrimaryGeneratedColumn()
  id: number;

  @Column("longtext")
  audioStringBase64: string;

  @Column()
  post_id: number;

//===== FOREIGN KEY
@OneToOne( type => Post)
@JoinColumn({ name: 'post_id' })
post: Post;


  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default AudioFile;
