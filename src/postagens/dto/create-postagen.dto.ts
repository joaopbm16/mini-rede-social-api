import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreatePostagenDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: 'Chave estrangeira que referencia a tabela  id da tabela usuario', })
    usuario_id: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(255, {
      message: 'A postagen pode ter no máximo 255 caracteres',
    })
    @ApiProperty({ description: 'postagen do usuário', maxLength: 255 })
    mensagem_post: string;
  }

