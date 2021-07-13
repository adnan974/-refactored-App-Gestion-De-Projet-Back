import { Entity, Column, CreateDateColumn, UpdateDateColumn,DeleteDateColumn,PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';

@Entity()
export class Project{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

    @Column()
    title:string;

    users:User[];

    
    tasks:Task[];

    @Column()
    createdBy;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;


}