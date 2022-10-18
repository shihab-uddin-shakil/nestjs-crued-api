/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
  private userRepository : Repository<User>
  ){}
   async create(createUserDto: CreateUserDto) {
    const user=this.userRepository.create(createUserDto);

    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find({
      select: {
        id:true,
        email: true,
        name: true,
        address:true,
        phone:true,
        created_at:true,
      }
    });
  }

  async findOne(id: number) {
    return  await this.userRepository.findOneBy({id:id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user=this.findOne(id);
    if(!user) throw new Error("not found");

    await this.userRepository.createQueryBuilder().update(updateUserDto).where({id:id}).execute();
    
    return await this.findOne(id);
  }

  async remove(id: number) {
    const user=this.findOne(id);
    if(!user) throw new Error("not found");

     await this.userRepository.delete({id:id});
    return `This action removes a  user`;
  }
}
