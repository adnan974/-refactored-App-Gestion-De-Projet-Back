import { Entity, Column, CreateDateColumn, UpdateDateColumn,DeleteDateColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

    @Column()
    title:string;

    @Column()
    createdBy;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;


}