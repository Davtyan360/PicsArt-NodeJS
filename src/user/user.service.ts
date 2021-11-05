import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../models/user.schema';
import { RegUser } from '../dto/regUser.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
    async auth(createUserDto: RegUser): Promise<User> {
        return new this.userModel({...createUserDto}).save();
    }
}
