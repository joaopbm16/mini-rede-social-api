import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { CurtidasModule } from './curtidas-/curtidas-.module';

@Module({
  controllers: [ComentariosController],
  providers: [ComentariosService],
  imports: [CurtidasModule],
})
export class ComentariosModule {}
