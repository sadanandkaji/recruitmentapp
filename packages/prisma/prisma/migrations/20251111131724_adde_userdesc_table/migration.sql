-- CreateTable
CREATE TABLE "Userdesc" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "skills" TEXT[],
    "isExperienced" BOOLEAN NOT NULL,
    "yearsOfExperience" INTEGER,
    "collegeName" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "passoutYear" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Userdesc_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Userdesc_userId_key" ON "Userdesc"("userId");

-- AddForeignKey
ALTER TABLE "Userdesc" ADD CONSTRAINT "Userdesc_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
