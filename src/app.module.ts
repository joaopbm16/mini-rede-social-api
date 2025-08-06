import { Module } from '@nestjs/common';
import { ComentariosModule } from './comentarios/comentarios.module';
import { CurtidasComentariosModule } from './curtidas-comentarios/curtidas-comentarios.module';
import { CurtidasModule } from './curtidas/curtidas.module';
import { PostagensModule } from './postagens/postagens.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    UsuariosModule,
    PostagensModule,
    CurtidasModule,
    ComentariosModule,
    CurtidasComentariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
