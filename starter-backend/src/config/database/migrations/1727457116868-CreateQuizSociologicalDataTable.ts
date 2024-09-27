import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateQuizSociologicalDataTable1727457116868 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'quiz_sociological_data',
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
              },
              {
                name: 'value',
                type: 'int',
              },
              {
                name: 'color',
                type: 'varchar',
              },
              {
                name: 'quizId',
                type: 'int',
              },
            ],
          }),
        );
    
        await queryRunner.createForeignKey(
          'quiz_sociological_data',
          new TableForeignKey({
            columnNames: ['quizId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'quiz',
            onDelete: 'CASCADE',
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('quiz_sociological_data');
    }
}
