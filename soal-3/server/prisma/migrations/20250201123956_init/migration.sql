/*
  Warnings:

  - You are about to drop the column `priceAfterDiscount` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "priceAfterDiscount",
ADD COLUMN     "price_after_discount" DECIMAL(65,30);
