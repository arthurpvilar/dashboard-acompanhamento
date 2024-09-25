import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsNumber()
  cep: number;

  @IsNotEmpty()
  @IsNumber()
  number: number;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsString()
  complement?: string;

  @IsNotEmpty()
  @IsString()
  neighborhood: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  estate: string;
}
