import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableQuizAddCreateAt1727798064867 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'quiz',
            new TableColumn({
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('quiz', 'createdAt');
    }
}
