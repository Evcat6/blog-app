import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePost } from 'src/common/types/update-post.type';
import { Repository } from 'typeorm';

import { PostEntity } from '~/common/entities/entities';

@Injectable()
export class PostRepository {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) {}

  async findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  async findById(id: number): Promise<PostEntity | undefined> {
    return this.postRepository.findOne({ where: { id } });
  }

  async create(post: PostEntity): Promise<PostEntity> {
    return this.postRepository.save(post);
  }

  async update({ id, post }: UpdatePost): Promise<PostEntity> {
    await this.postRepository.update(id, post);
    return this.findById(id);
  }

  async findOneWithComments(id: number): Promise<PostEntity> {
    return await this.postRepository.findOne({
      where: { id },
      relations: ['comments'],
    });
  }

  async delete(id: number): Promise<number> {
    await this.postRepository.delete(id);
    return id;
  }
}
