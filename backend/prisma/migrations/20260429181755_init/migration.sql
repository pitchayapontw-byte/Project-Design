/*
  Warnings:

  - You are about to drop the column `Genre` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "Genre",
ADD COLUMN     "genre" TEXT NOT NULL DEFAULT '';
