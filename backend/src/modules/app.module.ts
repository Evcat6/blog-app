import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModuleConfig } from '~/config/typeorm.config';

import { CommentModule } from './comment.module';
import { PostModule } from './post.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...TypeOrmModuleConfig,
    PostModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
