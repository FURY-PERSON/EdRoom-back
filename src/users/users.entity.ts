import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'users'})
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'varchar', unique: true})
  email: string;

  @Column({type: 'varchar'})
  password: string;
}