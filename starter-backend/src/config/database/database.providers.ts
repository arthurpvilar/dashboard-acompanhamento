// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { entities } from './database-entities';
import { MainSeeder } from './main-seeder';

export const typeormOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: false,
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(typeormOptions);