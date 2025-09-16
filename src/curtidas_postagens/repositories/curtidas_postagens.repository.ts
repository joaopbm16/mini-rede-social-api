import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCurtidasPostagenDto } from "../dto/create-curtidas_postagen.dto";
import { CurtidasPostagenEntity } from "../entities/curtidas_postagen.entity";
import { UpdateCurtidasPostagenDto } from "../dto/update-curtidas_postagen.dto";
@Injectable()
export class CurtidasPostagensRepository {
    constructor(private readonly prismaRepository: PrismaService) {}

    async create(createCurtidasPostagensDto: CreateCurtidasPostagenDto): Promise<CurtidasPostagenEntity> {
        return await this.prismaRepository.curtidasPostagens.create({
            data: createCurtidasPostagensDto,
        });
    }

    async findAll(): Promise<CurtidasPostagenEntity[]> {
        return await this.prismaRepository.curtidasPostagens.findMany({
            orderBy: {
                id: 'asc',
            },
        });
    }

    async findOne(id: number): Promise<CurtidasPostagenEntity | null> {
        return await this.prismaRepository.curtidasPostagens.findFirst({
            where: {
                id,
            }
        });
    }

    async update(id: number, updateCurtidasComentarioDto: UpdateCurtidasPostagenDto): Promise<CurtidasPostagenEntity> {
        return await this.prismaRepository.curtidasPostagens.update({
            where: {
                id,
            },
            data: updateCurtidasComentarioDto,
        });
    }

    async remove(id: number): Promise<CurtidasPostagenEntity> {
        return await this.prismaRepository.curtidasPostagens.delete({
            where: {
                id,
            }
        });
    }
}