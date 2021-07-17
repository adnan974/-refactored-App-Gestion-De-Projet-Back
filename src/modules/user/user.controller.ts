import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
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
