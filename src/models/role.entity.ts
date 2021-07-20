import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Role{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    role:string;

    @OneToMany(()=>User,user=>user.role)
    users:User[];


}