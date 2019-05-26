import { Injectable } from '@nestjs/common';
import {Admin} from "./admin.entity";
import {Repository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import {CreateAdminDto} from "./create-admin.dto";
import * as crypto from "crypto";

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>,
    ) {}

    async create(createAdminDto: CreateAdminDto): Promise<void> {
        createAdminDto.password = crypto.createHmac('sha256', createAdminDto.password).digest('hex');
        createAdminDto.active = true;
        createAdminDto.emailConfirmed = false;
        await this.adminRepository.save(createAdminDto);
    }

    async findOneByEmail(email: string): Promise<Admin> {
        return await this.adminRepository.findOne({
            where: {
                email: email,
            }
        });
    }

}
