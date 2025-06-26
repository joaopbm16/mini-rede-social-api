import { PrismaService } from "src/prisma/prisma.servise";
import { UpdateComentarioDto } from "../dto/update-comentario.dto";
import { ComentarioEntity } from "../entities/comentario.entity";
import { CreateComentarioDto } from "../dto/create-comentario.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ComentarioRepository {
  constructor(private readonly prismaRepository: PrismaService) {}

  async create(createComentarioDto: CreateComentarioDto): Promise<ComentarioEntity> {
    return this.prismaRepository.comentarios.create({
      data: createComentarioDto,
    });
  }

  async findAll(): Promise<ComentarioEntity[]> {
    return this.prismaRepository.comentarios.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number): Promise<ComentarioEntity | null> {
    return this.prismaRepository.comentarios.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updatecomentarioDto: UpdateComentarioDto,
  ): Promise<ComentarioEntity> {
    return await this.prismaRepository.comentarios.update({
      where: {
        id,
      },
      data: updatecomentarioDto,
    });
  }

  async remove(id: number): Promise<ComentarioEntity> {
    return await this.prismaRepository.comentarios.delete({
      where: {
        id,
      },
    });
  }
}