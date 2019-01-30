import { Injectable } from '@nestjs/common';
import {Admin} from "./admin.entity";
import {Repository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin)
        private readonly adminRepository: Repository<Admin>,
    ) {}

    async findAll(): Promise<Admin[]> {
        return await this.adminRepository.find();
    }
}
