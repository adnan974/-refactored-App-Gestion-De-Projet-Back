import { Injectable } from "@nestjs/common";
import { Role } from "src/constants/role.enum";
import { User } from "src/models/user.entity";
import { UserRepostory } from "src/repositories/user.repository";

@Injectable()
export class UserAuthorization {

    constructor(private userRepository:UserRepostory){}

    async isAdmin(userId:number):Promise<boolean>{
        let user:User = await this.userRepository.findOne({where:{id:userId},relations:['role']});

        if(user.role.id === Role.Admin) return true;
        return false;
    }
}
