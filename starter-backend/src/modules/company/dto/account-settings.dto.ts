import { ApiProperty } from '@nestjs/swagger';

export class AccountSettingsDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ required: false })
  notifications?: boolean;

  @ApiProperty({ required: false })
  silenceAccount?: boolean;

  @ApiProperty({ required: false })
  removeAccount?: boolean;
}
