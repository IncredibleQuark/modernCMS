import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from "typeorm";
import { AdminModule } from './admin/admin.module';
import {AuthModule} from "./auth/auth.module";

@Module({
    imports: [AdminModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '',
            database: 'cms',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {
    constructor(private readonly connection: Connection) {
    }
}
