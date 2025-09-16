import { Module } from '@nestjs/common';
import { PostagensService } from './postagens.service';
import { PostagensController } from './postagens.controller';
import { PostagensRepository } from './repositories/postagens.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PostagensController],
  providers: [PostagensService, PostagensRepository, PrismaService],
})
export class PostagensModule {}
