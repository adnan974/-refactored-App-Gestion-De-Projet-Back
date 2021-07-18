import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('/auth')
export class AuthController {

    constructor(private authService:AuthService){}

    // TODO: Validation du mdp de l'utilisateur à ajouter avan tde générer le token 
    @Post('/login')
    login(@Body() user) {
        return this.authService.validateUser(user.username,user.password)
        .then((user)=>{
            console.log(user);
            // A commenter pour avoir la possiblité de se login avec n'importe quel 
            // username + password
            if(!user){
                throw new UnauthorizedException();
            }
            return this.authService.generateAccessToken(user);

        })
        .catch((err)=>{
            console.log(err);
            throw new UnauthorizedException();
        });
    }
}
