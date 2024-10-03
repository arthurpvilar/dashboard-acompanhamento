import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateQuizQuestionTable1727457089258
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quiz_question',
        columns: [
          {
            name: 'index',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'question',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'answer',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'image',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'audio',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'quizId',
            type: 'int',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKeys('quiz_question', [
      new TableForeignKey({
        columnNames: ['quizId'],
        referencedColumnNames: ['index'],
        referencedTableName: 'quiz',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['parentQuestionId'],
        referencedColumnNames: ['index'],
        referencedTableName: 'quiz_question',
        onDelete: 'SET NULL',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quiz_question');
  }
}
