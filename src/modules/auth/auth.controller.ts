import { BadRequestException, Body, Controller, NotFoundException, Post, UnauthorizedException } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { LoginDTO } from 'src/dto/login.dto';
import { User } from 'src/models/user.entity';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('/auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/login')
    @ApiOperation({
        summary:"Login and get a jwt token"
    })
    login(@Body() user:LoginDTO) {
        
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
            throw new BadRequestException();
        });
    }
}
