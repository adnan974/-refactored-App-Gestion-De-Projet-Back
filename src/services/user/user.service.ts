import { Get, Injectable, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
import { User } from 'src/models/user.entity';
import { UserRepostory } from 'src/repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(private userRepository:UserRepostory){}

    async getAllUsers(){
        return await this.userRepository.find();
    }

    async getUser(id:number){
        return await this.userRepository.findOne(id);
    }

    async createUser(user:CreateUserDTO){

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);

        user.password = hash;
        
        return await this.userRepository.save(user);
    }

    async updateUser(id:number,updatedUser:UpdateUserDTO){

        let originalUser:User = await this.userRepository.findOne(id);
        let userToInsert:User = {...originalUser,...updatedUser};
        return await this.userRepository.save(userToInsert);

    }

    async softDeleteUser(id:number){
        return await this.userRepository.softDelete(id);
    }

    async getUserByUsername(username){
        return await this.userRepository.findOne({where:{username:username}});
    }

}
