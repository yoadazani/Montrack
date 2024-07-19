-- CreateTable
CREATE TABLE "MoneyRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "pocketId" TEXT,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MoneyRecord_pocketId_fkey" FOREIGN KEY ("pocketId") REFERENCES "Budget" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "MoneyRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "attachment" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "msg" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Wallet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "budgetId" TEXT,
    "description" TEXT,
    "amount" INTEGER NOT NULL,
    "attachment" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Wallet_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Budget" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "amount" INTEGER NOT NULL,
    "emuji" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT,
    "password" TEXT NOT NULL,
    "resetPasswordOTP" INTEGER,
    "resetPasswordExpiration" DATETIME,
    "password_updated_at" DATETIME,
    "pin_code" INTEGER,
    "Quotes" TEXT,
    "Lenguage" TEXT NOT NULL DEFAULT 'en',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_User" ("created_at", "email", "id", "imageUrl", "name", "password", "password_updated_at", "resetPasswordExpiration", "resetPasswordOTP", "updated_at") SELECT "created_at", "email", "id", "imageUrl", "name", "password", "password_updated_at", "resetPasswordExpiration", "resetPasswordOTP", "updated_at" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "MoneyRecord_id_key" ON "MoneyRecord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Goal_id_key" ON "Goal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Notification_id_key" ON "Notification"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_id_key" ON "Wallet"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Budget_id_key" ON "Budget"("id");
