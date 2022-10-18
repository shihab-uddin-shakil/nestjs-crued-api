/* eslint-disable prettier/prettier */
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity('users')
export class User {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id:number

    @Column({
        type: 'text'
    })
    name:string
    @Column({
        type: 'text'
    })
    email:string
    @Column({
        type: 'text'
    })
    phone:string
    @Column({
        type: 'text'
    })
    address:string
    @Column({
        type:'timestamp',
        default: new Date()
    })
    created_at:Date
}
