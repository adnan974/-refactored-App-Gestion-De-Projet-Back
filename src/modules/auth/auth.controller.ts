import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('/auth')
export class AuthController {

    constructor(private authService:AuthService){}

    // TODO: Validation du mdp de l'utilisateur à ajouter avan tde générer le token 
    @Post('/login')
    login(@Body() user) {
       return this.authService.generateAccessToken(user);
    }
}
