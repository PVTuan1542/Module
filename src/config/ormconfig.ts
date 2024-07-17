import { DataSourceOptions, DataSource } from 'typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

// dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: (process.env.DB_CONNECTION as any) || 'mysql',
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT, 10) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'module_node',
  synchronize: false,
  entities: [join(__dirname, '..', 'entities', '**', '*.entity.{ts,js}')],
  migrations: [join(__dirname, '..', 'migrations', '**', '*.{ts,js}')],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;