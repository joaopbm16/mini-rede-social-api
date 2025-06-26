import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateComentarioDto {
  
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Chave estrangeira que referencia o id da tabela usuário',
    example: 1,
  })
  usuario_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Chave estrangeira que referencia o id da tabela postagem',
    example: 10,
  })
  postagem_id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'A mensagem pode ter no máximo 255 caracteres',
  })
  @ApiProperty({
    description: 'Mensagem do comentário do usuário',
    maxLength: 255,
    example: 'Muito bom esse post!',
  })
  mensagem_come: string;
}

