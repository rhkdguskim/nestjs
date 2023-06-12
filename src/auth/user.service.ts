import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRePositroy } from "./user.repository";
import { FindOneOptions } from "typeorm";
import { UserDTO } from "./dto/user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRePositroy)
        private userRapository: UserRePositroy
        ){}

        async findByFields(option: FindOneOptions<UserDTO>): Promise<UserDTO | undefined> {
            return await this.userRapository.findOne(option)
        }

        async save(userDTO: UserDTO): Promise<UserDTO | undefined> {
            return await this.userRapository.save(userDTO);
        }
}
