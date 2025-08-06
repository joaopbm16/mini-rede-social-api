import { Injectable } from '@nestjs/common';
import { CreateCurtidasComentarioDto } from './dto/create-curtidas-comentario.dto';
import { UpdateCurtidasComentarioDto } from './dto/update-curtidas-comentario.dto';

@Injectable()
export class CurtidasComentariosService {
  create(createCurtidasComentarioDto: CreateCurtidasComentarioDto) {
    return 'This action adds a new curtidasComentario';
  }

  findAll() {
    return `This action returns all curtidasComentarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} curtidasComentario`;
  }

  update(id: number, updateCurtidasComentarioDto: UpdateCurtidasComentarioDto) {
    return `This action updates a #${id} curtidasComentario`;
  }

  remove(id: number) {
    return `This action removes a #${id} curtidasComentario`;
  }
}
