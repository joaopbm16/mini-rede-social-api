import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePerfilDto {

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave Estrangeira Referente ao ID da Tabela Usuarios' })
    usuario_id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'Nome do Perfil do Usuário' })
    nome_per: string;
}
