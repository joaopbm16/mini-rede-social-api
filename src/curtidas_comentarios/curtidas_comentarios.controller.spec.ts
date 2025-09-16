import { Test, TestingModule } from '@nestjs/testing';
import { CurtidasComentariosController } from './curtidas_comentarios.controller';
import { CurtidasComentariosService } from './curtidas_comentarios.service';

describe('CurtidasComentariosController', () => {
  let controller: CurtidasComentariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurtidasComentariosController],
      providers: [CurtidasComentariosService],
    }).compile();

    controller = module.get<CurtidasComentariosController>(CurtidasComentariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
