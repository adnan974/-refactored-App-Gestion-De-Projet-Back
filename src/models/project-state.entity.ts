import { Entity, Column,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectState{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    state:string;


}