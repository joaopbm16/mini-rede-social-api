import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePerfilDto } from "../dto/create-perfil.dto";
import { PerfilEntity } from "../entities/perfil.entity";
import { UpdatePerfilDto } from "../dto/update-perfil.dto";

@Injectable()
export class PerfilRepository {
    constructor(private readonly prismaRepository: PrismaService) {}

    async create(createPerfilDto: CreatePerfilDto): Promise<PerfilEntity> {
        return await this.prismaRepository.perfil.create({
            data: createPerfilDto,
        });
    }

    async findAll(): Promise<any[]> {
        return await this.prismaRepository.perfil.findMany({
            orderBy: { id: 'asc' },
            include: {
                usuario: {
                    select: { nome_usua: true },
                },
            },
        });
    }

    async findOne(id: number): Promise<PerfilEntity | null> {
        return await this.prismaRepository.perfil.findFirst({
            where: {
                id,
            },
        });
    }

    async update(id: number, updatePerfilDto: UpdatePerfilDto): Promise<PerfilEntity> {
        return await this.prismaRepository.perfil.update({
            where: {
                id,
            },
            data: updatePerfilDto,
        });
    }

    async remove(id: number): Promise<PerfilEntity> {
        return await this.prismaRepository.perfil.delete({
            where: {
                id,
            }
        });
    }
}