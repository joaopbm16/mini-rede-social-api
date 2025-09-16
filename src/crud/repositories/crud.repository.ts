import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCrudDto } from '../dto/create-crud.dto';
import { CrudEntity } from '../entities/crud.entity';
import { UpdateCrudDto } from '../dto/update-crud.dto';

@Injectable()
export class CrudRepository {
  constructor(private readonly prismaRepository: PrismaService) {}

  async create(createCrudDto: CreateCrudDto): Promise<CrudEntity> {
    return await this.prismaRepository.cRUD.create({
      data: createCrudDto,
    });
  }

  async findAll(): Promise<CrudEntity[]> {
    return await this.prismaRepository.cRUD.findMany({
      orderBy: { id: 'asc' },
      select: {
        id: true,
        create: true,
        update: true,
        delete: true,
        view: true,
        id_perfil: true,
        nome_tabela: true,
        perfil: {
          select: {
            nome_per: true,
            usuario: {
              select: { id: true, nome_usua: true },
            },
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<CrudEntity | null> {
    return await this.prismaRepository.cRUD.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateCrudDto: UpdateCrudDto,
  ): Promise<CrudEntity | null> {
    return await this.prismaRepository.cRUD.update({
      where: {
        id,
      },
      data: updateCrudDto,
    });
  }

  async remove(id: number): Promise<CrudEntity> {
    return await this.prismaRepository.cRUD.delete({
      where: {
        id,
      },
    });
  }
}
