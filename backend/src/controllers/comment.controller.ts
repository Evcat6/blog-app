import { Body, Controller, Post } from '@nestjs/common';

import { CommentEntity } from '~/common/entities/entities';
import { ControllerPath } from '~/common/enums/controller-path.enum';
import { CommentService } from '~/services/comment.service';

type CreateComment = {
  postId: number;
  content: string;
};

@Controller(ControllerPath.COMMENT)
export class CommentController {
  public constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(@Body() data: CreateComment): Promise<CommentEntity> {
    return await this.commentService.createComment(data);
  }
}
