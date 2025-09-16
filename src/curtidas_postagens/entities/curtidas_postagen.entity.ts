import { CurtidasPostagens } from "@prisma/client";

export class CurtidasPostagenEntity implements CurtidasPostagens {
    id: number;
    usuario_id: number;
    postagem_id: number;
    criacao_cupo: Date;
}
