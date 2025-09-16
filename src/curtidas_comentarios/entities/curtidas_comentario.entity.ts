import { CurtidasComentarios } from "@prisma/client";

export class CurtidasComentarioEntity implements CurtidasComentarios {
    id: number;
    usuario_id: number;
    comentario_id: number;
    criacao_cuco: Date;
}
