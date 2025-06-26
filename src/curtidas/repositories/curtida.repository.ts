import { PrismaService } from "src/prisma/prisma.servise";
import { CreateCurtidaDto } from "../dto/create-curtida.dto";
import { CurtidaEntity } from "../entities/curtida.entity";
import { UpdateCurtidaDto } from "../dto/update-curtida.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CurtidaRepository {
  constructor(private readonly prismaRepository: PrismaService) {}

  async create(createCurtidaDto: CreateCurtidaDto): Promise<CurtidaEntity> {
    return this.prismaRepository.curtidas.create({
      data: createCurtidaDto,
    });
  }

  async findAll(): Promise<CurtidaEntity[]> {
    return this.prismaRepository.curtidas.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number): Promise<CurtidaEntity | null> {
    return this.prismaRepository.curtidas.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateCurtidaDto: UpdateCurtidaDto,
  ): Promise<CurtidaEntity> {
    return await this.prismaRepository.curtidas.update({
      where: {
        id,
      },
      data: updateCurtidaDto,
    });
  }

  async remove(id: number): Promise<CurtidaEntity> {
    return await this.prismaRepository.curtidas.delete({
      where: {
        id,
      },
    });
  }
}