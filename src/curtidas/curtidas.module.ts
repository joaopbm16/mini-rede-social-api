import { Module } from '@nestjs/common';
import { CurtidasService } from './curtidas.service';
import { CurtidasController } from './curtidas.controller';

@Module({
  controllers: [CurtidasController],
  providers: [CurtidasService],
})
export class CurtidasModule {}
