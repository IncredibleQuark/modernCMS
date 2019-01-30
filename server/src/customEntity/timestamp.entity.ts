import {Column, CreateDateColumn} from "typeorm";

export abstract class Timestamp {
    @CreateDateColumn()
    createdAt: string;

    @Column({nullable: true, type: "timestamp with time zone"})
    updatedAt: string;

    @Column({nullable: true, type: "timestamp with time zone"})
    deletedAt: string;

}