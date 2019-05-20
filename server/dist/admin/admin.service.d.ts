import { Admin } from "./admin.entity";
import { Repository } from "typeorm";
import { CreateAdminDto } from "./create-admin.dto";
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: Repository<Admin>);
    findAll(): Promise<Admin[]>;
    create(createAdminDto: CreateAdminDto): Promise<void>;
}
