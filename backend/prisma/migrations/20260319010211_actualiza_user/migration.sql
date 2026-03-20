-- AlterTable
ALTER TABLE `user` ADD COLUMN `id_local` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_id_local_fkey` FOREIGN KEY (`id_local`) REFERENCES `Local`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
