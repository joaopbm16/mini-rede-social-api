import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCurtidasComentarioDto } from "../dto/create-curtidas_comentario.dto";
import { CurtidasComentarioEntity } from "../entities/curtidas_comentario.entity";
import { UpdateCurtidasComentarioDto } from "../dto/update-curtidas_comentario.dto";

@Injectable()
export class CurtidasComentarioRepository {
    constructor(private readonly prismaRepository: PrismaService) {}

    async create(createCurtidasComentarioDto: CreateCurtidasComentarioDto): Promise<CurtidasComentarioEntity> {
        return await this.prismaRepository.curtidasComentarios.create({
            data: createCurtidasComentarioDto,
        });
    }

    async findAll(): Promise<CurtidasComentarioEntity[]> {
        return await this.prismaRepository.curtidasComentarios.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }

    async findOne(id: number): Promise<CurtidasComentarioEntity | null> {
        return await this.prismaRepository.curtidasComentarios.findFirst({
            where: {
                id,
            }
        });
    }

    async update(id: number, updateCurtidasComentarioDto: UpdateCurtidasComentarioDto): Promise<CurtidasComentarioEntity> {
        return await this.prismaRepository.curtidasComentarios.update({
            where: {
                id,
            },
            data: updateCurtidasComentarioDto,
        });
    }

    async remove(id: number): Promise<CurtidasComentarioEntity> {
        return await this.prismaRepository.curtidasComentarios.delete({
            where: {
                id,
            }
        });
    }
}