import { Module } from '@nestjs/common';
import { UsersController } from '../../models/users/users.controller';
import { UsersService } from '../../models/users/users.service';
import { typeOrmModule } from '../database/postgres/config.module';
import { AppController } from './app.controller';
import { AppService } from './config.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRootAsync(typeOrmModule)],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
