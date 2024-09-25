import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateAddressDto {
  @IsOptional()
  @IsNumber()
  cep?: number;

  @IsOptional()
  @IsNumber()
  number?: number;

  @IsOptional()
  @IsString()
  street?: string;

  @IsOptional()
  @IsString()
  complement?: string;

  @IsOptional()
  @IsString()
  neighborhood?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  estate?: string;
}
