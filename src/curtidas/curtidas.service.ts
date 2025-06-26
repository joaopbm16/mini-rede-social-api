import { Injectable } from '@nestjs/common';
import { CreateCurtidaDto } from './dto/create-curtida.dto';
import { UpdateCurtidaDto } from './dto/update-curtida.dto';
import { CurtidaRepository } from './repositories/curtida.repository';

@Injectable()
export class CurtidasService {
  constructor(private readonly repository: CurtidaRepository) {}

  async create(createCurtidaDto: CreateCurtidaDto) {
    return await this.repository.create(createCurtidaDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCurtidaDto: UpdateCurtidaDto) {
    return await this.repository.update(id, updateCurtidaDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
