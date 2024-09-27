import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateQuizTable1727457076356 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'quiz',
            columns: [
              {
                name: 'id',
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
                name: 'identifier',
                type: 'varchar',
              },
              {
                name: 'type',
                type: 'varchar',
              },
              {
                name: 'description',
                type: 'text',
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
                name: 'status',
                type: 'enum',
                enum: ['draft', 'published', 'archived'],
                default: `'draft'`,
              },
              {
                name: 'ownerId',
                type: 'uuid',
              },
            ],
          }),
        );
    
        await queryRunner.createForeignKey(
          'quiz',
          new TableForeignKey({
            columnNames: ['ownerId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('quiz');
    }
}
