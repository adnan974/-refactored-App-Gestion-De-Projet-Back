import { Entity, Column, CreateDateColumn, UpdateDateColumn,DeleteDateColumn,PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn, OneToOne, JoinTable } from 'typeorm';
import { Project } from './project.entity';
import { TaskTag } from './task-tag.entity';
import { User } from './user.entity';

@Entity()
export class Task{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    description:string;

    @Column({nullable:false})
    title:string;

    @ManyToOne(()=>Project,project=>project.tasks,{nullable:false})
    associatedProject:Project;

    @ManyToMany(()=>TaskTag)
    @JoinTable()
    taskTags:TaskTag[];

    @ManyToOne(()=>User,user=>user.createdTasks,{nullable:false})
    createdBy:User;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;


}