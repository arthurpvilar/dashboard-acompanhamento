import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateQuizQuestionOptionTable1727457098456
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quiz_question_option',
        columns: [
          {
            name: 'index',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'isChecked',
            type: 'boolean',
            default: false,
          },
          {
            name: 'weight',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'image',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'sociologicalId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'questionId',
            type: 'int',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKeys('quiz_question_option', [
      new TableForeignKey({
        columnNames: ['sociologicalId'],
        referencedColumnNames: ['index'],
        referencedTableName: 'quiz_sociological_data',
        onDelete: 'SET NULL',
      }),
      new TableForeignKey({
        columnNames: ['questionId'],
        referencedColumnNames: ['index'],
        referencedTableName: 'quiz_question',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quiz_question_option');
  }
}
