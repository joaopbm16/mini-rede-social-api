import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCrudDto {
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: 'Dado Boolean' })
  create: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: 'Dado Boolean' })
  update: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: 'Dado Boolean' })
  delete: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: 'Dado Boolean' })
  view: boolean;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Chave Estrangeira Referente ao ID da Tabela Perfil',
  })
  id_perfil: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome Tabela' })
  nome_tabela: string;
}
