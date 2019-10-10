import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
 
    constructor(@InjectModel('User') private readonly itemModel: Model<User>){}

    async findAll(): Promise<User[]> {
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.itemModel.findOne({ _id : id });
    }

    async create(item: User): Promise<User> {
        const newItem = new this.itemModel(item)
        return await newItem.save()
    }

    async delete(id: string): Promise<User> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, user: User): Promise<User> {
        return await this.itemModel.findByIdAndUpdate(id, user)
    }

}
