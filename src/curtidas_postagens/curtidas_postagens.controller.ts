import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurtidasPostagensService } from './curtidas_postagens.service';
import { CreateCurtidasPostagenDto } from './dto/create-curtidas_postagen.dto';
import { UpdateCurtidasPostagenDto } from './dto/update-curtidas_postagen.dto';

@Controller('curtidas-postagens')
export class CurtidasPostagensController {
  constructor(private readonly curtidasPostagensService: CurtidasPostagensService) {}

  @Post()
  create(@Body() createCurtidasPostagenDto: CreateCurtidasPostagenDto) {
    return this.curtidasPostagensService.create(createCurtidasPostagenDto);
  }

  @Get()
  findAll() {
    return this.curtidasPostagensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curtidasPostagensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurtidasPostagenDto: UpdateCurtidasPostagenDto) {
    return this.curtidasPostagensService.update(+id, updateCurtidasPostagenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curtidasPostagensService.remove(+id);
  }
}
