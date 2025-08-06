import { Module } from '@nestjs/common';
import { CurtidasComentariosService } from './curtidas-comentarios.service';
import { CurtidasComentariosController } from './curtidas-comentarios.controller';

@Module({
  controllers: [CurtidasComentariosController],
  providers: [CurtidasComentariosService],
})
export class CurtidasComentariosModule {}
