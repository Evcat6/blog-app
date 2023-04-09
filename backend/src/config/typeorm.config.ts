import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { CommentEntity, PostEntity } from '~/common/entities/entities';
import { Environment } from '~/common/enums/enums';

const typeOrmConfig = async (
  configService: ConfigService
): Promise<TypeOrmModuleOptions> => ({
  type: 'postgres',
  host: configService.get(Environment.DB_HOST),
  port: configService.get(Environment.DB_PORT),
  username: configService.get(Environment.DB_USERNAME),
  password: configService.get(Environment.DB_PASSWORD),
  database: configService.get(Environment.DB_NAME),
  entities: [],
  migrations: ['migrations/*.js'],
  migrationsTableName: 'migrations',
  synchronize: false,
  autoLoadEntities: true,
});

export const TypeOrmModuleConfig = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: typeOrmConfig,
  }),
  TypeOrmModule.forFeature([PostEntity, CommentEntity]),
];
