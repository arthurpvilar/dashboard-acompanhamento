import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateQuizOwnerDto {
  @IsNotEmpty()
  @IsUUID()
  ownerId: string;
}
