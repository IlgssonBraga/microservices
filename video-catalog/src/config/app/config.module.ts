import { Module } from '@nestjs/common';
// import { UsersController } from '../../models/users/users.controller';
// import { UsersService } from '../../models/users/users.service';
// import { typeOrmModule } from '../database/postgres/config.module';
import { AppController } from './app.controller';
import { AppService } from './config.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbconfig from '../../config/database/postgres/config.module';
// import { CategoriesController } from '../../models/categories/categories.controller';
// import { CategoriesService } from '../../models/categories/categories.service';
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
