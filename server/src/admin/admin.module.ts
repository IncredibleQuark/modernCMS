import {Module} from '@nestjs/common';
import {AdminController} from './admin.controller';
import {AdminService} from './admin.service';
import {Admin} from "./admin.entity";
import {TypeOrmModule} from '@nestjs/typeorm';
import {JwtStrategy} from "../auth/jwt.strategy";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([Admin]), AuthModule],
    controllers: [AdminController],
    providers: [AdminService]
})
export class AdminModule {
}
