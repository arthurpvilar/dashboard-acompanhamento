import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateQuizAttemptTable1727457129968 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void>
    {
        await queryRunner.createTable(
          new Table({
            name: 'quiz_attempt',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'email',
                type: 'varchar',
                isNullable: true,
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
              {
                name: 'userId',
                type: 'uuid',
                isNullable: true,
              },
              {
                name: 'quizId',
                type: 'int',
              },
            ],
          }),
        );
    
        await queryRunner.createForeignKeys('quiz_attempt', [
          new TableForeignKey({
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'SET NULL',
          }),
          new TableForeignKey({
            columnNames: ['quizId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'quiz',
            onDelete: 'CASCADE',
          }),
        ]);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('quiz_attempt');
    }
}
