import {Controller, Get, Post, Body, HttpException, UseGuards} from '@nestjs/common';
import {CreateAdminDto} from "./create-admin.dto";
import {AdminService} from "./admin.service";
import {JsonResponse} from "../common/JsonResponse";
import {JwtAuthGuard} from "../guards/jwtAuth.guard";
import {Admin} from "./admin.entity";
import {AuthService} from "../auth/auth.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService, private readonly authService: AuthService) {
    }

    @Get()
    @UseGuards(AuthGuard())
    async findAll() {
        return 'all';
    }

    @Post('signin')
    async login(@Body() admin: Admin): Promise<any> {
        try {
            const token: string = await this.authService.signIn(admin);
            return JsonResponse.success(token);
        } catch (err) {
            throw new HttpException(err.message, 500);
        }

    }

    @Post()
    async create(@Body() createAdminDto: CreateAdminDto): Promise<JsonResponse> {
        try {
            const response = await this.adminService.create(createAdminDto);
            return JsonResponse.success(response)
        } catch (err) {
            throw new HttpException(err.message, 500);
        }

    }
}
