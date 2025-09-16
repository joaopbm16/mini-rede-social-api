import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength, IsNumber } from "class-validator";

export class CreatePostagenDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave Estrangeira Referente ao ID da Tabela Usuarios' })
    usuario_id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255, {
        message: 'A descricao da postagem pode ter no máximo 255 caracteres',
    })
    @ApiProperty({ description: 'Descricao das Postagens do Usuario', maxLength: 255 })
    mensagem_post: string;
}
