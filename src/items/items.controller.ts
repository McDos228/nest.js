import { Controller, Get, Post, Body, Req, Res, Param, Put, Delete } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interfaice';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService){}

    @Get()
    // findAll(@Req() req: Request, @Res() res: Response): string {
    findAll():  Promise<Item[]> {
        return this.itemsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post()
    create(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(CreateItemDto)
    }

    @Delete(':id')
    delete(@Param('id') id):  Promise<Item> {
        return this.itemsService.delete(id)
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.update(id, updateItemDto)
    }

}
