import { Module } from '@nestjs/common';
import { PostagensService } from './postagens.service';
import { PostagensController } from './postagens.controller';
import { PostagenRepository } from './repositories/postagem.repository';
import { PrismaService } from 'src/prisma/prisma.servise';

@Module({
  controllers: [PostagensController],
  providers: [PostagensService,PostagenRepository,PrismaService],
})
export class PostagensModule {}
