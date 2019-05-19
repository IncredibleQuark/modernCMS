
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {Timestamp} from "../customEntity/timestamp.entity";

@Entity()
export class Admin extends Timestamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    name: string;

    @Column({length: 50})
    surname: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    active: boolean;

    @Column()
    emailConfirmed: boolean;

}