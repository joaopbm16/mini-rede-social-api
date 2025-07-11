import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { UsuarioRepository } from './repositories/usuario.repository';
import { PrismaService } from 'src/prisma/prisma.servise';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService,UsuarioRepository,PrismaService],
})
export class UsuariosModule {}
