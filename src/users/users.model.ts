import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({type: 'varchar'})
  email: string;

  @Column({type: 'varchar'})
  password: string;
}