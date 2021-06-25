import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { config as setConfig } from 'dotenv';

setConfig();
setConfig({ path: '.env' }); // use this if you use another .env file. Take the two setConfig if you use .env + other.env

export default registerAs(
  'typeOrmConfig',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
    cli: {
      migrationsDir: 'src/database/migrations',
    },
    migrations: ['src/database/migrations/*.ts'],
  }),
);
