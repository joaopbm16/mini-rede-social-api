import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { CrudRepository } from './repositories/crud.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CrudController],
  providers: [CrudService, CrudRepository, PrismaService],
})
export class CrudModule {}
