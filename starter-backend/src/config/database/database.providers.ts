// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { entities } from './database-entities';
import { MainSeeder } from './main-seeder';

export const typeormOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: false,
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(typeormOptions);
