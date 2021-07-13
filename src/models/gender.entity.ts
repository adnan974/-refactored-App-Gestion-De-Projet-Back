import { Entity, Column, CreateDateColumn, UpdateDateColumn,DeleteDateColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gender{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    gender:string;


}