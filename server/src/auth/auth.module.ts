import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

import {TypeOrmModule} from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import {AdminModule} from "../admin/admin.module";
import {Admin} from "../admin/admin.entity";
import {AdminService} from "../admin/admin.service";
const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
    imports: [
        TypeOrmModule.forFeature([Admin]),
        passportModule,
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600,
            },
        })
    ],
    providers: [AuthService, JwtStrategy, AdminService],
    exports: [passportModule, AuthService],
})
export class AuthModule {}