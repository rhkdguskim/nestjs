import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entity/cat.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    exports: [TypeOrmModule],
    controllers: [CatController],
    providers: [CatService],
  })
export class CatModule {}
