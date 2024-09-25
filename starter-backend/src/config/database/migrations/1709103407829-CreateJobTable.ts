import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateJobTable1709103407829 implements MigrationInterface {
  private jobTable = new Table({
    name: 'jobs',
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment',
      },
      {
        name: 'company_name',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'title',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'location',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'publication_date',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'work_regime',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'work_schedule',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'affirmative_vacancy',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'activities',
        type: 'text',
      },
      {
        name: 'company_logo',
        type: 'text',
      },
      {
        name: 'salary',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'hiring',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'differentials',
        type: 'text',
      },
      {
        name: 'benefits',
        type: 'text',
      },
      {
        name: 'about',
        type: 'text',
      },
      {
        name: 'company_id',
        type: 'int',
        isNullable: true,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.jobTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.jobTable);
  }
}
