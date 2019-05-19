export interface CreateAdminDto {
    name: string;
    surname: string;
    email: string;
    password: string;
    active?: boolean;
    emailConfirmed?: boolean;
}