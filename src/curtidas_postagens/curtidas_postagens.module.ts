import { Module } from '@nestjs/common';
import { CurtidasPostagensService } from './curtidas_postagens.service';
import { CurtidasPostagensController } from './curtidas_postagens.controller';
import { CurtidasPostagensRepository } from './repositories/curtidas_postagens.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CurtidasPostagensController],
  providers: [CurtidasPostagensService, CurtidasPostagensRepository, PrismaService],
})
export class CurtidasPostagensModule {}
