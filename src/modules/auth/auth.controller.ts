import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('/auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/login')
    login(@Body() user) {
        return this.authService.validateUser(user.username,user.password)
        .then((user)=>{
            
            // A commenter pour avoir la possiblité de se login avec n'importe quel 
            // username + password
            if(!user){
                throw new UnauthorizedException();
            }
            return this.authService.generateAccessToken(user);

        })
        .catch((err)=>{
            console.log(err);
        });
    }
}
