import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUsuarioDto {
    
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, {
    message: 'O nome pode ter no máximo 100 caracteres',
  })
  @ApiProperty({ description: 'Nome do Usuario', maxLength: 100 })
  nome_usua: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100, {
    message: 'O email pode ter no máximo 100 caracteres',
  })
  @ApiProperty({ description: 'Email do Usuario', maxLength: 100 })
  email_usua: string;
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(255, {
    message: 'A senha pode ter no máximo 100 caracteres',
  })
  @ApiProperty({ description: 'Senha do Usuario', maxLength: 255 })
  senha_usua: string;
}
