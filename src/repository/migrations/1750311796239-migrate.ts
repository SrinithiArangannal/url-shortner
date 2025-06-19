import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate1750311796239 implements MigrationInterface {
    name = 'Migrate1750311796239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "link" (
                "id" SERIAL NOT NULL,
                "url" character varying NOT NULL,
                "shortUrl" character varying NOT NULL,
                "count" integer NOT NULL DEFAULT '0',
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_26206fb7186da72fbb9eaa3fac9" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "link"
        `);
    }

}
