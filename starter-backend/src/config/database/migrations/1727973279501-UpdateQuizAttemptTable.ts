import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateQuizAttemptTable1727973279501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Remove a coluna 'answers' (jsonb)
    await queryRunner.dropColumn('quiz_attempt', 'answers');

    // Remove a coluna 'score' (int)
    await queryRunner.dropColumn('quiz_attempt', 'score');

    // Adiciona a coluna 'isCompleted' (boolean)
    await queryRunner.addColumn(
      'quiz_attempt',
      new TableColumn({
        name: 'isCompleted',
        type: 'boolean',
        default: false,
      }),
    );

    // Adiciona a coluna 'completedAt' (timestamp)
    await queryRunner.addColumn(
      'quiz_attempt',
      new TableColumn({
        name: 'completedAt',
        type: 'timestamp',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Re-adiciona a coluna 'answers' (jsonb)
    await queryRunner.addColumn(
      'quiz_attempt',
      new TableColumn({
        name: 'answers',
        type: 'jsonb',
      }),
    );

    // Re-adiciona a coluna 'score' (int)
    await queryRunner.addColumn(
      'quiz_attempt',
      new TableColumn({
        name: 'score',
        type: 'int',
      }),
    );

    // Remove a coluna 'isCompleted'
    await queryRunner.dropColumn('quiz_attempt', 'isCompleted');

    // Remove a coluna 'completedAt'
    await queryRunner.dropColumn('quiz_attempt', 'completedAt');
  }
}
