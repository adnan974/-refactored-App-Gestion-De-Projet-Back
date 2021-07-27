import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from 'src/dto/create-user.dto';
import { UpdateUserDTO } from 'src/dto/update-user.dto';
import { IsAdminGuard } from 'src/guards/is-admin.guard';
import { IsHimselfOrIsAdminGuard } from 'src/guards/is-himself-or-is-admin.guard';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserService } from 'src/services/user/user.service';


@Controller('users')
@ApiTags('users')
export class UserController {

    constructor(private userService: UserService) { }

    @UseGuards(JwtAuthGuard,IsAdminGuard)
    @Get()
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'get all users'
    })
    getUsers() {
        return this.userService.getAllUsers()
            .then((users) => {
                return users;
            })
            .catch((err) => {
                console.log(err)
                throw new BadRequestException();
            });

    }


    @UseGuards(JwtAuthGuard,IsHimselfOrIsAdminGuard)
    @Get('/:id')
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'get one user by its id'
    })
    getUser(@Param('id') id: number) {
        return this.userService.getUser(id)
            .then((user) => {
                return user;
            })
            .catch((err) => {
                console.log(err)
                throw new BadRequestException();
            })
    }


    @Post('/')
    @ApiOperation({
        summary: 'Create an user'
    })
    createUser(@Body() user: CreateUserDTO) {
        return this.userService.createUser(user)
            .then((user) => {
                return user;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });
    }


    @UseGuards(JwtAuthGuard,IsHimselfOrIsAdminGuard)
    @Patch()
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Update task'
    })
    updateUser(@Body() user: UpdateUserDTO) {
        return this.userService.updateUser(user)
            .then((user) => {
                return user;
            })
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });

    }

    @UseGuards(JwtAuthGuard,IsAdminGuard)
    @Delete('/:id')
    @ApiBearerAuth()
    @ApiOperation({
        summary: 'Delete an user by ts id'
    })
    @ApiParam({
        name: 'id',
        type: Number,
        required: true
    })
    softDeleteUser(@Param('id') id: number) {
        this.userService.softDeleteUser(id)
            .catch((err) => {
                console.log(err);
                throw new BadRequestException();
            });
    }


}
