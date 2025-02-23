import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  console.log('Server start on port: ', process.env.PORT)
  await app.listen(process.env.PORT);
}
bootstrap();
