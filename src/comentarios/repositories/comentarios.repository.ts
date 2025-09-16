import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateComentarioDto } from "../dto/create-comentario.dto";
import { ComentarioEntity } from "../entities/comentario.entity";
import { UpdateComentarioDto } from "../dto/update-comentario.dto";

@Injectable()
export class ComentarioRepository {
    constructor(private readonly prismaRepository: PrismaService) {}

    async create(createComentarioDto: CreateComentarioDto): Promise<ComentarioEntity> {
        return await this.prismaRepository.comentarios.create({
            data: createComentarioDto,
        });
    }

    async findAll(): Promise<ComentarioEntity[]> {
        return await this.prismaRepository.comentarios.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }

    async findOne(id: number): Promise<ComentarioEntity | null> {
        return await this.prismaRepository.comentarios.findFirst({
            where: {
                id,
            }
        });
    }

    async update(id: number, updateComentarioDto: UpdateComentarioDto): Promise<ComentarioEntity> {
        return await this.prismaRepository.comentarios.update({
            where: {
                id,
            },
            data: updateComentarioDto,
        });
    }

    async remove(id: number): Promise<ComentarioEntity> {
        return await this.prismaRepository.comentarios.delete({
            where: {
                id,
            }
        });
    }
}