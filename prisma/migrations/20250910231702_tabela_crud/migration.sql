-- CreateTable
CREATE TABLE "CRUD" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create" BOOLEAN NOT NULL DEFAULT false,
    "update" BOOLEAN NOT NULL DEFAULT false,
    "delete" BOOLEAN NOT NULL DEFAULT false,
    "view" BOOLEAN NOT NULL DEFAULT true,
    "id_perfil" INTEGER NOT NULL,
    "nome_tabela" TEXT NOT NULL,
    CONSTRAINT "CRUD_id_perfil_fkey" FOREIGN KEY ("id_perfil") REFERENCES "Perfil" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
