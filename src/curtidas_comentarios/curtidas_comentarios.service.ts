import { Injectable } from '@nestjs/common';
import { CreateCurtidasComentarioDto } from './dto/create-curtidas_comentario.dto';
import { UpdateCurtidasComentarioDto } from './dto/update-curtidas_comentario.dto';
import { CurtidasComentarioRepository } from './repositories/curtidas_comentarios.repository';

@Injectable()
export class CurtidasComentariosService {
  constructor(private readonly repository: CurtidasComentarioRepository) {}

  async create(createCurtidasComentarioDto: CreateCurtidasComentarioDto) {
    return await this.repository.create(createCurtidasComentarioDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateCurtidasComentarioDto: UpdateCurtidasComentarioDto) {
    return await this.repository.update(id, updateCurtidasComentarioDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
