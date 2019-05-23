import {Controller, Post, Body} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {Admin} from "../admin/admin.entity";

@Controller('auth')
export class AuthController {
    constructor(private readonly  authService: AuthService) {
    }
    //
    // @Post('login')
    // async login(@Body() admin: Admin): Promise<any> {
    //     return this.authService.login(admin);
    // }
    //
    // @Post('register')
    // async register(@Body() admin: Admin): Promise<any> {
    //     return this.authService.register(admin);
    // }
}
