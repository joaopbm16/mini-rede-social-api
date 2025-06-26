import { Module } from '@nestjs/common';
import { CurtidasService } from './curtidas.service';
import { CurtidasController } from './curtidas.controller';
import { PrismaService } from 'src/prisma/prisma.servise';
import { CurtidaRepository } from './repositories/curtida.repository';

@Module({
  controllers: [CurtidasController],
  providers: [CurtidasService,CurtidaRepository,PrismaService],
})
export class CurtidasModule {}
