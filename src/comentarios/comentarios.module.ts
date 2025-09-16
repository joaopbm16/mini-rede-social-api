import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { ComentarioRepository } from './repositories/comentarios.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ComentariosController],
  providers: [ComentariosService, ComentarioRepository, PrismaService],
})
export class ComentariosModule {}
