import { Injectable } from '@nestjs/common';
import {Admin} from "./admin.entity";
import {Repository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import {CreateAdminDto} from "./create-admin.dto";

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>,
    ) {}

    async findAll(): Promise<Admin[]> {
        return await this.adminRepository.find();
    }

    async create(createAdminDto: CreateAdminDto): Promise<void> {
        createAdminDto.active = true;
        createAdminDto.emailConfirmed = false;
        await this.adminRepository.save(createAdminDto);
    }
}
