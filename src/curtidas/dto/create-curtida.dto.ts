import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCurtidaDto {
  
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
}


