import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1709103396227 implements MigrationInterface {
  private userTable = new Table({
    name: 'users',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'phone',
        type: 'varchar',
        length: '50',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(this.userTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.userTable);
  }
}
