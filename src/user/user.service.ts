import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    createUser(): Promise<User> {
        const user = new this.userModel({
            name: "Ameer Hamza",
            address: {
                street: "123 Streat",
                city: "karachi"
            }
        })

        return user.save()
    }


    findAllUser(): Promise<User[]> {
        return this.userModel.find();
    }
}
