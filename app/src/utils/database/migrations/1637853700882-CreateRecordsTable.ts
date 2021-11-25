import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRecordsTable1637853700882 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log("this log is from the migration !");
    await queryRunner.createTable(
      new Table({
        name: "records",
        columns: [
          {
            name: "id",
            type: "text",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "uuid",
          },
          {
            name: "label",
            type: "text",
          },
          {
            name: "icon",
            type: "text",
          },
          {
            name: "val",
            type: "text",
          },
          {
            name: "syncd",
            type: "boolean",
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
    await queryRunner.dropTable("records");
  }
}
