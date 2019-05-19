import {Controller, Get, Post, Body} from '@nestjs/common';
import {CreateAdminDto} from "./create-admin.dto";
import {AdminService} from "./admin.service";
import {JsonResponse} from "../common/JsonResponse";

@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService) {
    }

    @Get()
    async findAll() {
        return 'all';
    }

    @Post()
    async create(@Body() createAdminDto: CreateAdminDto): Promise<JsonResponse> {
        await this.adminService.create(createAdminDto);
        return JsonResponse.success()
    }
}
