import { Module } from '@nestjs/common';
import { PostagensService } from './postagens.service';
import { PostagensController } from './postagens.controller';
import { PostagemRepository } from './repositories/postagem.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PostagensController],
  providers: [PostagensService, PostagemRepository, PrismaService],
})
export class PostagensModule {}
