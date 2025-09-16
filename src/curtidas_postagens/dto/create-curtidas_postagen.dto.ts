import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty } from "class-validator";

export class CreateCurtidasPostagenDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave Estrangeira Referente ao ID da Tabela Usuarios' })
    usuario_id: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave Estrangeira Referente ao ID da Tabela Postagens' })
    postagem_id: number;
}
