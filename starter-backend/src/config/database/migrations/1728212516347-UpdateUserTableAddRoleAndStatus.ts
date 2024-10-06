import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateUserTableAddRoleAndStatus1728212516347
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona a coluna 'isCompleted' (boolean)
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'role',
        type: 'varchar',
        default: "'student'",
        isNullable: true,
      }),
    );

    // Adiciona a coluna 'completedAt' (timestamp)
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'status',
        type: 'varchar',
        default: "'Ativo'",
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a coluna 'isCompleted'
    await queryRunner.dropColumn('users', 'role');

    // Remove a coluna 'completedAt'
    await queryRunner.dropColumn('users', 'status');
  }
}
