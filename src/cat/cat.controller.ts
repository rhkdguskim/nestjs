import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './interface/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
@Controller('cat')
export class CatController {
    constructor(private readonly catsService: CatService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      this.catsService.create(createCatDto);
    }
  
    @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }

}
