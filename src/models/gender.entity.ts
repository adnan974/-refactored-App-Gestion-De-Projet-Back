import { Entity, Column, CreateDateColumn, UpdateDateColumn,DeleteDateColumn,PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Gender{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    gender:string;

    @OneToMany(()=>User,user=>user.gender)
    users:User[]

}