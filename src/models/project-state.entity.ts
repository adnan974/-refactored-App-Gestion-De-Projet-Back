import { Entity, Column,PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class ProjectState{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    state:string;

    @OneToMany(()=>Project,project=>project.state)
    projects:Project[];


}