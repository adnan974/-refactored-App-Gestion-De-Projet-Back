import { Entity, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';
import { Task } from './task.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    address: string;

    @Column({nullable:true})
    address2:string;

    @Column()
    username: string;

    @Column()
    password: string;

    @ManyToMany(() => User)
    @JoinTable()
    projects: Project[];

    @ManyToMany(() => Task)
    @JoinTable()
    tasks:Task[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}