import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePostagenDto } from "../dto/create-postagen.dto";
import { PostagenEntity } from "../entities/postagen.entity";
import { UpdatePostagenDto } from "../dto/update-postagen.dto";

@Injectable()
export class PostagensRepository {
    constructor(private readonly prismaRepository: PrismaService) { }

    async create(createPostagenDto: CreatePostagenDto): Promise<PostagenEntity> {
        return await this.prismaRepository.postagens.create({
            data: createPostagenDto,
        });
    }

    async findAll(): Promise<PostagenEntity[]> {
        return await this.prismaRepository.postagens.findMany({
            orderBy: { id: 'asc' },
            include: {
                usuario: {
                    select: { nome_usua: true },
                },
            },
        });
    }

    async findOne(id: number): Promise<PostagenEntity | null> {
        return await this.prismaRepository.postagens.findFirst({
            where: {
                id,
            }
        });
    }

    async update(id: number, updatePostagenDto: UpdatePostagenDto): Promise<PostagenEntity> {
        return await this.prismaRepository.postagens.update({
            where: {
                id,
            },
            data: updatePostagenDto,
        });
    }

    async remove(id: number): Promise<PostagenEntity> {
        return await this.prismaRepository.postagens.delete({
            where: {
                id,
            }
        });
    }
}