import { Entity, Column, CreateDateColumn,OneToMany ,UpdateDateColumn,DeleteDateColumn,PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { ProjectState } from './project-state.entity';
import { ProjectTag } from './project-tag.entity';
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

    @ManyToOne(()=>ProjectState,projectState=>projectState.projects)
    state:ProjectState;

    users:User[];

    @OneToMany(()=>Task,task=>task.associatedProject)
    tasks:Task[];

    @ManyToMany(()=>ProjectTag)
    @JoinTable()
    projectTags:ProjectTag[];

    @OneToOne(()=>User)
    createdBy:User;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;


}