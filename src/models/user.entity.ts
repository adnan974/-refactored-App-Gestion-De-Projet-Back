import { Entity, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne } from 'typeorm';
import { Gender } from './gender.entity';
import { Project } from './project.entity';
import { Role } from './role.entity';
import { Task } from './task.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Gender,gender=>gender.users,{nullable:false})
    gender:Gender;

    @ManyToOne(()=>Role,role=>role.users,{nullable:false})
    role:Role;

    @Column({nullable:false})
    firstname: string;

    @Column({nullable:false})
    lastname: string;

    @Column({nullable:false})
    address: string;

    @Column({nullable:true})
    address2:string;

    @Column({
        nullable:false,
        unique:true
    })
    username: string;

    @Column({nullable:false})
    password: string;

    @ManyToMany(() => Project)
    @JoinTable()
    projects: Project[];

    @OneToMany(()=>Project,project=>project.createdBy)
    createdProjects:Project[];

    @OneToMany(()=>Task,task=>task.createdBy)
    createdTasks:Task[];

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