/*
  Warnings:

  - You are about to drop the column `id_empleado` on the `mensajechatbot` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `MensajeChatBot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `mensajechatbot` DROP FOREIGN KEY `MensajeChatBot_id_empleado_fkey`;

-- DropIndex
DROP INDEX `MensajeChatBot_id_empleado_fkey` ON `mensajechatbot`;

-- AlterTable
ALTER TABLE `mensajechatbot` DROP COLUMN `id_empleado`,
    ADD COLUMN `id_user` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `MensajeChatBot` ADD CONSTRAINT `MensajeChatBot_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
