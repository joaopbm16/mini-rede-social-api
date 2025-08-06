import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreatePostagenDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Chave estrangeira que referencia o id da tabela USUARIOS',
  })
  usuario_id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'A postagem pode ter no máximo 255 caracteres',
  })
  @ApiProperty({ description: 'Postagem do usuário', maxLength: 255 })
  mensagem_post: string;
}
