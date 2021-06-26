import { Module } from '@nestjs/common';
import { AppController } from './config.controller';
import { AppService } from './config.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbconfig from '../../config/database/postgres/config.module';
import { CategoriesModule } from '../../models/categories/categories.module';

@Module({
  imports: [
    CategoriesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dbconfig()),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
