import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateQuizQuestionTable1727457089258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'quiz_question',
            columns: [
              {
                name: 'id',
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
              {
                name: 'parentQuestionId',
                type: 'int',
                isNullable: true,
              },
            ],
          }),
        );
    
        await queryRunner.createForeignKeys('quiz_question', [
          new TableForeignKey({
            columnNames: ['quizId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'quiz',
            onDelete: 'CASCADE',
          }),
          new TableForeignKey({
            columnNames: ['parentQuestionId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'quiz_question',
            onDelete: 'CASCADE',
          }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('quiz_question');
    }
}
