import { Injectable } from '@nestjs/common';
import { CreateCurtidaDto } from './dto/create-curtidas-.dto';
import { UpdateCurtidaDto } from './dto/update-curtidas-.dto';

@Injectable()
export class CurtidasService {
  create(createCurtidaDto: CreateCurtidaDto) {
    return 'This action adds a new curtida';
  }

  findAll() {
    return `This action returns all curtidas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curtida`;
  }

  update(id: number, updateCurtidaDto: UpdateCurtidaDto) {
    return `This action updates a #${id} curtida`;
  }

  remove(id: number) {
    return `This action removes a #${id} curtida`;
  }
}
