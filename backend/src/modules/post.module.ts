import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from 'src/common/entities/entities';

import { PostController } from '~/controllers/post.controller';
import { PostRepository } from '~/repositories/post.repository';
import { PostService } from '~/services/post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostController],
  providers: [PostRepository, PostService],
})
export class PostModule {}
