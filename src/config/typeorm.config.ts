import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { UserEntity } from 'src/users/users.entity';
dotenv.config();


export const ApiEntities = [
  UserEntity,
];

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  entities: ApiEntities
};