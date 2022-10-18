/* eslint-disable prettier/prettier */
import { IsEmpty,IsString,IsEmail } from 'class-validator';

export class CreateUserDto {

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
