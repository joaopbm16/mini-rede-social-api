import { PrismaService } from 'src/prisma/prisma.servise';
import { PostagenEntity } from '../entities/postagen.entity';
import { CreatePostagenDto } from '../dto/create-postagen.dto';
import { UpdatePostagenDto } from '../dto/update-postagen.dto';

export class PostagenRepository {
  constructor(private readonly prismaRepository: PrismaService) {}

  async create(createPostagenDto: CreatePostagenDto): Promise<PostagenEntity> {
    return this.prismaRepository.postagens.create({
      data: createPostagenDto,
    });
  }

  async findAll(): Promise<PostagenEntity[]> {
    return this.prismaRepository.postagens.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number): Promise<PostagenEntity | null> {
    return this.prismaRepository.postagens.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updatePostagenDto: UpdatePostagenDto,
  ): Promise<PostagenEntity> {
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
      },
    });
  }
}
