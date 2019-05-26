import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
// import { JwtPayload } from './interfaces/jwt-payload.interface';
import {AdminService} from "../admin/admin.service";
import {LogInAdminDto} from "../admin/log-in-admin.dto";

@Injectable()
export class AuthService {
    constructor(
        private readonly adminService: AdminService,
        private readonly jwtService: JwtService,
    ) {}

    async signIn(data: LogInAdminDto): Promise<string> {
        // In the real-world app you shouldn't expose this method publicly
        // instead, return a token once you verify user credentials
        return this.jwtService.sign(data.email);
    }

    async validateUser(payload: any): Promise<any> {
        console.log(payload);
        // const r = this.jwtService.verify(payload);
        // console.log(r);
        return await this.adminService.findOneByEmail(payload.email);
    }
}