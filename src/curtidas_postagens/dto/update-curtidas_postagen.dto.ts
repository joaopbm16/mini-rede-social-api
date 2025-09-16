import { PartialType } from '@nestjs/swagger';
import { CreateCurtidasPostagenDto } from './create-curtidas_postagen.dto';

export class UpdateCurtidasPostagenDto extends PartialType(CreateCurtidasPostagenDto) {}
