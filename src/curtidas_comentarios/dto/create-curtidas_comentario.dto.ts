import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty } from "class-validator";

export class CreateCurtidasComentarioDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave Estrangeira Referente ao ID da Tabela Usuarios' })
    usuario_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave Estrangeira Referente ao ID da Tabela Comentarios' })
    comentario_id: number;
}
