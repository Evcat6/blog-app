import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CommentEntity } from '~/common/entities/entities';

@Injectable()
export class CommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>
  ) {}

  async findById(id: number): Promise<CommentEntity | undefined> {
    return this.commentRepository.findOne({ where: { id } });
  }

  async create(comment: CommentEntity): Promise<CommentEntity> {
    return this.commentRepository.save(comment);
  }

  async update(id: number, comment: CommentEntity): Promise<CommentEntity> {
    await this.commentRepository.update(id, comment);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
