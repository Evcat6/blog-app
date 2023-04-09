import { Injectable } from '@nestjs/common';

import { CommentEntity } from '~/common/entities/entities';
import { CommentRepository } from '~/repositories/comment.repository';
import { PostRepository } from '~/repositories/post.repository';

type CreateComment = {
  postId: number;
  content: string;
};

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly postRepository: PostRepository
  ) {}

  async findByPostId(postId: number): Promise<CommentEntity | undefined> {
    return await this.commentRepository.findById(postId);
  }

  async createComment({
    postId,
    content,
  }: CreateComment): Promise<CommentEntity> {
    const post = await this.postRepository.findById(postId);
    const comment = new CommentEntity();
    comment.content = content;
    comment.post = post;
    const newComment = await this.commentRepository.create(comment);
    delete newComment.post;
    return newComment;
  }
}
