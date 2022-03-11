import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
	) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const createdUser = new this.userModel(createUserDto);
		return createdUser.save();
	}

	async findAll(): Promise<User[]> {
		return this.userModel.find().exec();
	}

	findOne(id: number) {
		return `This action returns a #${id} user`;
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	async remove() {
		return this.userModel.deleteMany().exec();
	}
}
