import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get()
    findAll():  Promise<User[]> {
        return this.usersService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() CreateUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(CreateUserDto)
    }

    @Delete(':id')
    delete(@Param('id') id):  Promise<User> {
        return this.usersService.delete(id)
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateUserDto: CreateUserDto): Promise<User> {
        return this.usersService.update(id, updateUserDto)
    }

}
