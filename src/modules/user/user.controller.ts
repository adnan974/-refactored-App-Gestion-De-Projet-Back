import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
import { UserService } from 'src/services/user/user.service';

@Controller('users')
@ApiTags('users')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    @ApiOperation({
        summary: 'get all users'
    })
    getUsers() {
        return this.userService.getAllUsers()
            .then((users) => {
                console.log(users);
                return users;
            })
            .catch((err) => {
                console.log(err);
            });

    }

    @Get('/:id')
    @ApiOperation({
        summary:'get one user by its id'
    })
    getUser(@Param('id')id:number){
        return this.userService.getUser(id)
        .then((user)=>{
            return user;
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    @Post('/')
    @ApiOperation({
        description:'Create an user'
    })
    createUser(@Body() user:CreateUserDTO){
        return this.userService.createUser(user)
        .then((user)=>{
            return user;
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    @Patch()
    @ApiOperation({
        summary:'Update task'
    })
    updateUser(@Body() user:UpdateUserDTO){
        return this.userService.updateUser(user)
        .then((user)=>{
            return user;
        })
        .catch((err)=>{
            console.log(err);
        });

    }

    @Delete('/:id')
    @ApiOperation({
        description:'Delete an user by ts id'
    })
    @ApiParam({
        name:'id',
        type:Number,
        required:true
    })
    softDeleteUser(@Param('id') id:number){
        this.userService.softDeleteUser(id);
    }


}
