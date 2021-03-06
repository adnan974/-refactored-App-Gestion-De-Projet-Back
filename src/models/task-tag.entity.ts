import { Entity, Column, CreateDateColumn, UpdateDateColumn,DeleteDateColumn,PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskTag{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    tagName:string;

    @Column({nullable:true})
    backgroudColor:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;
}