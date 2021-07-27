import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        private userService:UserService,
        private jwtService:JwtService
        ){}

    async validateUser(username:string,givenPassword:string){

        let user = await this.userService.getUserByUsername(username);
        const hash = user.password;
        const isMatch = await bcrypt.compare(givenPassword, hash);

        if(isMatch){
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
