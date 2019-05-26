import {IsEmail, IsNotEmpty, MinLength, MaxLength, IsBoolean} from 'class-validator';

export class CreateAdminDto {
    @MinLength(3)
    @MaxLength(20)
    @IsNotEmpty()
    name: string;

    @MinLength(3)
    @MaxLength(20)
    @IsNotEmpty()
    surname: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    active?: boolean;

    emailConfirmed?: boolean;
}