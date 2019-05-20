import { Timestamp } from "../customEntity/timestamp.entity";
export declare class Admin extends Timestamp {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    active: boolean;
    emailConfirmed: boolean;
}
