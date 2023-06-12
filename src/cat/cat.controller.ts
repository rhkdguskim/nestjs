import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './entity/cat.entity';
@Controller('cat')
export class CatController {
    constructor(private  catsService: CatService) {};

    @Get()
    FindAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id')id: number) : Promise<Cat> {
        return this.catsService.findOne(id)
    }

    @Post()
    create(@Body()cat: Cat) {
        this.catsService.create(cat)
    }

    @Delete(':id')
    remove(@Param('id')id: number){
        this.catsService.remove(id)
    }

    @Put(':id')
    update(@Param('id')id : number, @Body() cat: Cat) {
        this.catsService.update(id, cat);
        return `This Cat is Updated ${id}`
    }

}
