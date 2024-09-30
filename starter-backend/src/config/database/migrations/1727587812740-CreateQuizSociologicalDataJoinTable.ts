import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateQuizSociologicalDataJoinTable1727587812740
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'quiz_sociological_data_join', // Nome da tabela associativa
        columns: [
          {
            name: 'quizId',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'sociologicalDataId',
            type: 'int',
            isPrimary: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'quiz_sociological_data_join',
      new TableForeignKey({
        columnNames: ['quizId'],
        referencedColumnNames: ['index'],
        referencedTableName: 'quiz',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'quiz_sociological_data_join',
      new TableForeignKey({
        columnNames: ['sociologicalDataId'],
        referencedColumnNames: ['index'],
        referencedTableName: 'quiz_sociological_data',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('quiz_sociological_data_join');
  }
}
