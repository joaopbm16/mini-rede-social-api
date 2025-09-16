import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, MaxLength, IsString } from "class-validator";

export class CreateComentarioDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave Estrangeira Referente ao ID da Tabela Usuarios' })
    usuario_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave Estrangeira Referente ao ID da Tabela Postagens' })
    postagem_id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255, {
        message: 'A mensagem pode ter no máximo 255 caracteres',
    })
    @ApiProperty({ description: 'Mensagem do Comentario na Postagem', maxLength: 255 })
    mensagem_come: string;
}
