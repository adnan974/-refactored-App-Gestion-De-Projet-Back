import { Entity, Column, CreateDateColumn, UpdateDateColumn,DeleteDateColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskTag{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    tagName:string;

    @Column()
    backgroudColor:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;
}