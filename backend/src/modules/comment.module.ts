import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity, PostEntity } from 'src/common/entities/entities';
import { PostRepository } from 'src/repositories/post.repository';

import { CommentController } from '~/controllers/comment.controller';
import { CommentRepository } from '~/repositories/comment.repository';
import { CommentService } from '~/services/comment.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, PostEntity])],
  controllers: [CommentController],
  providers: [PostRepository, CommentRepository, CommentService],
})
export class CommentModule {}
