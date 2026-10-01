-- CreateEnum
CREATE TYPE "PrayerStatus" AS ENUM ('PENDING', 'APPROVED', 'ANSWERED', 'ARCHIVED');

-- CreateTable
CREATE TABLE "PrayerRequest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "request" TEXT NOT NULL,
    "status" "PrayerStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PrayerRequest_pkey" PRIMARY KEY ("id")
);
