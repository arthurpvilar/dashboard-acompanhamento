import { Entity, Column, PrimaryColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ unique: true })
  @IsNotEmpty()
  username: string;

  @Column({ name: 'full_name' })
  @IsNotEmpty()
  fullName: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;
}
