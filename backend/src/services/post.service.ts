import { Injectable } from '@nestjs/common';

import { PostEntity } from '~/common/entities/entities';
import { UpdatePost } from '~/common/types/update-post.type';
import { PostRepository } from '~/repositories/post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  async findById(id: number): Promise<PostEntity> {
    return this.postRepository.findById(id);
  }

  async findAll(): Promise<PostEntity[]> {
    return await this.postRepository.findAll();
  }

  async create(post: PostEntity): Promise<PostEntity> {
    return await this.postRepository.create(post);
  }

  async getOneWithComments(id: number): Promise<PostEntity> {
    return await this.postRepository.findOneWithComments(id);
  }

  async deleteOne(id: number): Promise<number> {
    return await this.postRepository.delete(id);
  }

  async updateOne({ id, post }: UpdatePost): Promise<PostEntity> {
    return await this.postRepository.update({ id, post });
  }
}
