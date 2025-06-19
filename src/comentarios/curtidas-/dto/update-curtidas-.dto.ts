import { PartialType } from '@nestjs/swagger';
import { CreateCurtidaDto } from './create-curtidas-.dto';

export class UpdateCurtidaDto extends PartialType(CreateCurtidaDto) {}
