import { Test, TestingModule } from '@nestjs/testing';
import { CurtidasPostagensService } from './curtidas_postagens.service';

describe('CurtidasPostagensService', () => {
  let service: CurtidasPostagensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurtidasPostagensService],
    }).compile();

    service = module.get<CurtidasPostagensService>(CurtidasPostagensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
