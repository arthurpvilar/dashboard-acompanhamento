import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompanyTable1709103365879 implements MigrationInterface {
  private companyTable = new Table({
    name: 'companies',
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
        name: 'cnpj',
        type: 'varchar',
        length: '18',
        isUnique: true,
      },
      {
        name: 'segment',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'address',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'phone',
        type: 'varchar',
        length: '14',
      },
      {
        name: 'responsible',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'company_banner',
        type: 'text',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(this.companyTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.companyTable);
  }
}
