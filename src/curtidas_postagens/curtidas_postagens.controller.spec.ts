import { Test, TestingModule } from '@nestjs/testing';
import { CurtidasPostagensController } from './curtidas_postagens.controller';
import { CurtidasPostagensService } from './curtidas_postagens.service';

describe('CurtidasPostagensController', () => {
  let controller: CurtidasPostagensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurtidasPostagensController],
      providers: [CurtidasPostagensService],
    }).compile();

    controller = module.get<CurtidasPostagensController>(CurtidasPostagensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
