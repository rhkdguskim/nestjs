import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';
@Injectable()
export class CatService {
    constructor() {
        
    }
    private readonly cats: Cat[] = [];
    create(cat: Cat) {
        this.cats.push(cat)
    }
    
    findAll() : Cat[] {
        return this.cats
    }
}
