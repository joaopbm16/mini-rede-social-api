import { PrismaService } from 'src/prisma/prisma.servise';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UsuarioEntity } from 'src/usuarios/entities/usuario.entity';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  constructor(private readonly prismaRepository: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    return this.prismaRepository.usuarios.create({
      data: createUsuarioDto,
    });
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.prismaRepository.usuarios.findMany({
      orderBy: {
        nome_usua: 'asc',
      },
    });
  }

  async findOne(id: number): Promise<UsuarioEntity | null> {
    return this.prismaRepository.usuarios.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioEntity> {
    return await this.prismaRepository.usuarios.update({
      where: {
        id,
      },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number): Promise<UsuarioEntity> {
    return await this.prismaRepository.usuarios.delete({
      where: {
        id,
      },
    });
  }
}
