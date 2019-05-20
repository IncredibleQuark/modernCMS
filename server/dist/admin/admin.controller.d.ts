import { CreateAdminDto } from "./create-admin.dto";
import { AdminService } from "./admin.service";
import { JsonResponse } from "../common/JsonResponse";
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    findAll(): Promise<string>;
    create(createAdminDto: CreateAdminDto): Promise<JsonResponse>;
}
