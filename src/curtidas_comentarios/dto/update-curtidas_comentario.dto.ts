import { PartialType } from '@nestjs/swagger';
import { CreateCurtidasComentarioDto } from './create-curtidas_comentario.dto';

export class UpdateCurtidasComentarioDto extends PartialType(CreateCurtidasComentarioDto) {}
