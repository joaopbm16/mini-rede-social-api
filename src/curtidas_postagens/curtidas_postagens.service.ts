import { Injectable } from '@nestjs/common';
import { CreateCurtidasPostagenDto } from './dto/create-curtidas_postagen.dto';
import { UpdateCurtidasPostagenDto } from './dto/update-curtidas_postagen.dto';
import { CurtidasPostagensRepository } from './repositories/curtidas_postagens.repository';

@Injectable()
export class CurtidasPostagensService {
  constructor(private readonly repository: CurtidasPostagensRepository) {}

  async create(createCurtidasPostagenDto: CreateCurtidasPostagenDto) {
    return await this.repository.create(createCurtidasPostagenDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCurtidasPostagenDto: UpdateCurtidasPostagenDto) {
    return await this.repository.update(id, updateCurtidasPostagenDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
