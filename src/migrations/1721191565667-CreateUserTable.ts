import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1721191565667 implements MigrationInterface {
    name = 'CreateUserTable1721191565667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`emailTitle\` longtext NULL, \`emailNote\` longtext NULL, \`email_verified_at\` timestamp NULL DEFAULT NULL, \`password\` varchar(255) NOT NULL, \`remember_token\` varchar(100) NULL, \`level\` int NOT NULL DEFAULT '0', \`status\` int NOT NULL DEFAULT '0', \`user_id\` varchar(255) NULL, \`address\` text NULL, \`job\` text NULL, \`note\` text NULL, \`phone\` varchar(255) NULL, \`google_id\` varchar(255) NULL, \`facebook_id\` varchar(255) NULL, \`kakao_id\` varchar(255) NULL, \`naver_id\` varchar(255) NULL, \`apple_id\` varchar(255) NULL, \`zipcode\` varchar(255) NULL, \`detail_address\` text NULL, \`withdrawal_reason\` text NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
