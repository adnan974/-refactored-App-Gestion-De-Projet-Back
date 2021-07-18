import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userService:UserService,
        private jwtService:JwtService
        ){}

    async validateUser(username:string,password:string){
        let user = await this.userService.getUserByUsername(username);
        
        if(user.password === password){
            return user;
        }

        return null;
    }

    async generateAccessToken(user: any) {

        const payload = { username: user.username, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
