import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { PostEntity } from '~/common/entities/entities';
import { ControllerPath } from '~/common/enums/enums';
import { UpdatePost } from '~/common/types/types';
import { PostService } from '~/services/post.service';

@Controller(ControllerPath.POST)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAll(): Promise<PostEntity[]> {
    return await this.postService.findAll();
  }

  @Post()
  async createUser(@Body() data: PostEntity): Promise<PostEntity> {
    return await this.postService.create(data);
  }

  @Get('/:id')
  async getPostWithComments(@Param('id') id: number): Promise<PostEntity> {
    return await this.postService.getOneWithComments(id);
  }

  @Delete('/:id')
  async deletePost(@Param('id') id: number): Promise<number> {
    return await this.postService.deleteOne(id);
  }

  @Put()
  async updatePost(@Body() payload: UpdatePost): Promise<PostEntity> {
    return await this.postService.updateOne(payload);
  }
}
