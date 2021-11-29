import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTimeTable1638197950697 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "times",
        columns: [
          {
            name: "id",
            type: "text",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "type",
            type: "text",
          },
          {
            name: "name",
            type: "text",
          },
          {
            name: "time",
            type: "date",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("times");
  }
}
