/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmpty,IsString,IsEmail } from 'class-validator';
export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsEmpty()
    @IsString()
    name: string
    
    @IsEmpty()
    @IsEmail()
    email: string
    
    @IsEmpty()
    @IsString()
    phone: string
    
    @IsEmpty()
    @IsString()
    address: string
    
}
