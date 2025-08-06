import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCurtidaDto {
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
}
