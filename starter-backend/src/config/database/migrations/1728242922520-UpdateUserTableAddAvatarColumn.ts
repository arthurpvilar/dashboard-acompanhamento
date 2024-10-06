import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateUserTableAddAvatarColumn1728242922520
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        default: "'1'",
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a coluna 'isCompleted'
    await queryRunner.dropColumn('users', 'avatar');
  }
}
