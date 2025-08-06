import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateComentarioDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Chave estrangeira que referencia o id da tabela USUARIOS',
  })
  usuario_id: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Chave estrangeira que referencia o id da tabela POSTAGENS',
  })
  postagem_id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'O comentário pode ter no máximo 255 caracteres',
  })
  @ApiProperty({ description: 'Comentário da postagem', maxLength: 255 })
  mensagem_come: string;
}
