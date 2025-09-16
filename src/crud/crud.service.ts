import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { CrudRepository } from './repositories/crud.repository';

@Injectable()
export class CrudService {
  constructor(private readonly repository: CrudRepository) {}

  async create(createCrudDto: CreateCrudDto) {
    return await this.repository.create(createCrudDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCrudDto: UpdateCrudDto) {
    return await this.repository.update(id, updateCrudDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
