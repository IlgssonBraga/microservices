import { NestFactory } from '@nestjs/core';
import { HttpErrorExceptionFilter } from './common/exceptions/http.exception-filter';
import { ModelNotFoundExceptionFilter } from './common/exceptions/model-not-found.exception-filter';
import { AppModule } from './config/app/config.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpErrorExceptionFilter());
  app.useGlobalFilters(new ModelNotFoundExceptionFilter());
  await app.listen(3000);
}
bootstrap();
