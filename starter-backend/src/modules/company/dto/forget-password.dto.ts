import { ApiProperty } from '@nestjs/swagger';

export class forgetPasswordDto {
  @ApiProperty()
  email: string;
}
