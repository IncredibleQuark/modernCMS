import {IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator";

export class LogInAdminDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(50)
    password: string;
}