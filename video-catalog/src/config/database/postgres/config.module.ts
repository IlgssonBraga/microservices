import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { registerAs } from '@nestjs/config';
import { config as setConfig } from 'dotenv';
import { resolve } from 'path';

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
    entities: [
      resolve(__dirname, '..', '..', '..', 'models', '**', '*.entity.{js,ts}'),
    ],
    synchronize: false,
    cli: {
      migrationsDir: resolve(
        __dirname,
        '..',
        '..',
        '..',
        'database',
        'migrations',
      ),
    },
    migrations: [
      resolve(
        __dirname,
        '..',
        '..',
        '..',
        'database',
        'migrations',
        '*.{js,ts}',
      ),
    ],
  }),
);
