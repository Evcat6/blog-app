import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { Environment } from './common/enums/enums';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get(Environment.PORT);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
