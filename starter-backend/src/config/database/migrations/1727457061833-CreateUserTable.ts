import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserTable1727457061833 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'uuid',
              },
              {
                name: 'username',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'fullName',
                type: 'varchar',
              },
              {
                name: 'email',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'password',
                type: 'varchar',
              },
            ],
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
