import { Get, Injectable, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UserRepostory } from 'src/repositories/user.repository';

@Injectable()
export class UserService {

    constructor(private userRepository:UserRepostory){}

    async getAllUsers(){
        return await this.userRepository.find();
    }

    async getUser(id:number){
        return await this.userRepository.findOne(id);
    }

    async softDeleteUser(id:number){
        return await this.userRepository.softDelete(id);
    }

}
