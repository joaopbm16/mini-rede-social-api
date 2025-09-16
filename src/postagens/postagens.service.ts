import { Injectable } from '@nestjs/common';
import { CreatePostagenDto } from './dto/create-postagen.dto';
import { UpdatePostagenDto } from './dto/update-postagen.dto';
import { PostagensRepository } from './repositories/postagens.repository';

@Injectable()
export class PostagensService {
  constructor(private readonly repository: PostagensRepository) {}

  async create(createPostagenDto: CreatePostagenDto) {
    return await this.repository.create(createPostagenDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updatePostagenDto: UpdatePostagenDto) {
    return await this.repository.update(id, updatePostagenDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
