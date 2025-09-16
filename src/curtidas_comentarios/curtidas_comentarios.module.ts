import { Module } from '@nestjs/common';
import { CurtidasComentariosService } from './curtidas_comentarios.service';
import { CurtidasComentariosController } from './curtidas_comentarios.controller';
import { CurtidasComentarioRepository } from './repositories/curtidas_comentarios.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CurtidasComentariosController],
  providers: [CurtidasComentariosService, CurtidasComentarioRepository, PrismaService],
})
export class CurtidasComentariosModule {}
