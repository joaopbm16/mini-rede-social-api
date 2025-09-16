-- CreateTable
CREATE TABLE "Usuarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_usua" TEXT NOT NULL,
    "email_usua" TEXT NOT NULL,
    "senha_usua" TEXT NOT NULL,
    "criacao_usua" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Postagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_id" INTEGER NOT NULL,
    "mensagem_post" TEXT NOT NULL,
    "criacao_post" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Postagens_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CurtidasPostagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_id" INTEGER NOT NULL,
    "postagem_id" INTEGER NOT NULL,
    "criacao_cupo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CurtidasPostagens_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CurtidasPostagens_postagem_id_fkey" FOREIGN KEY ("postagem_id") REFERENCES "Postagens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comentarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_id" INTEGER NOT NULL,
    "postagem_id" INTEGER NOT NULL,
    "mensagem_come" TEXT NOT NULL,
    "criacao_come" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comentarios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comentarios_postagem_id_fkey" FOREIGN KEY ("postagem_id") REFERENCES "Postagens" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CurtidasComentarios" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario_id" INTEGER NOT NULL,
    "comentario_id" INTEGER NOT NULL,
    "criacao_cuco" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CurtidasComentarios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CurtidasComentarios_comentario_id_fkey" FOREIGN KEY ("comentario_id") REFERENCES "Comentarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_usua_key" ON "Usuarios"("email_usua");

-- CreateIndex
CREATE UNIQUE INDEX "CurtidasPostagens_usuario_id_postagem_id_key" ON "CurtidasPostagens"("usuario_id", "postagem_id");

-- CreateIndex
CREATE UNIQUE INDEX "CurtidasComentarios_usuario_id_comentario_id_key" ON "CurtidasComentarios"("usuario_id", "comentario_id");
