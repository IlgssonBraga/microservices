import { Module } from '@nestjs/common';
import { UsersController } from '../../models/users/users.controller';
import { UsersService } from '../../models/users/users.service';
import { AppController } from './app.controller';
import { AppService } from './config.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
