import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateQuizQuestionAnswerTable1727973163002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Cria a tabela 'quiz_question_answer'
        await queryRunner.createTable(
          new Table({
            name: 'quiz_question_answer',
            columns: [
              {
                name: 'index',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'attemptId',
                type: 'int',
                isNullable: false,
              },
              {
                name: 'questionId',
                type: 'int',
                isNullable: false,
              },
              {
                name: 'optionId',
                type: 'int',
                isNullable: true,
              },
              {
                name: 'startedAt',
                type: 'timestamp',
                isNullable: true,
              },
              {
                name: 'completedAt',
                type: 'timestamp',
                isNullable: true,
              },
            ],
          }),
          true,
        );
    
        // Cria chaves estrangeiras
        await queryRunner.createForeignKeys('quiz_question_answer', [
          new TableForeignKey({
            columnNames: ['attemptId'],
            referencedColumnNames: ['index'],
            referencedTableName: 'quiz_attempt',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['questionId'],
            referencedColumnNames: ['index'],
            referencedTableName: 'quiz_question',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['optionId'],
            referencedColumnNames: ['index'],
            referencedTableName: 'quiz_question_option',
            onDelete: 'SET NULL',
          }),
        ]);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove a tabela 'quiz_question_answer'
        await queryRunner.dropTable('quiz_question_answer');
      }

}
