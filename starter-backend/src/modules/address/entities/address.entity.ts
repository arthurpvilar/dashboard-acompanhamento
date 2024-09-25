import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  cep: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  street: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  complement?: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  city: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  estate: string;
}
