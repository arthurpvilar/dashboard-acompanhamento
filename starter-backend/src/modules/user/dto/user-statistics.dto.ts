import { ApiProperty } from '@nestjs/swagger';

export class UserStatisticsDto {
  @ApiProperty({
    description: 'Number of students',
    example: 25,
  })
  students: number;

  @ApiProperty({
    description: 'Number of teachers',
    example: 10,
  })
  teachers: number;

  @ApiProperty({
    description: 'Number of administrators',
    example: 5,
  })
  administrators: number;

  @ApiProperty({
    description: 'Number of active users',
    example: 30,
  })
  active: number;

  @ApiProperty({
    description: 'Number of pending users',
    example: 8,
  })
  pending: number;

  @ApiProperty({
    description: 'Number of inactive users',
    example: 2,
  })
  inactive: number;
}
