import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateQuizAttemptTable1727457129968 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quiz_attempt',
        columns: [
          {
            name: 'index',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'userId',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'quizId',
            type: 'int',
          },
          {
            name: 'answers',
            type: 'jsonb',
          },
          {
            name: 'score',
            type: 'int',
          },
          {
            name: 'attemptedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKeys('quiz_attempt', [
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['index'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
      }),
      new TableForeignKey({
        columnNames: ['quizId'],
        referencedColumnNames: ['index'],
        referencedTableName: 'quiz',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quiz_attempt');
  }
}
