import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("roles")
export class RoleEntity {

    @PrimaryGeneratedColumn({name:"role_id"})
    roleId: number;

    @Column({name:"role_name"})
    roleName:string;
}
