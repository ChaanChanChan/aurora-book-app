import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
export declare class BootstrapService {
    private readonly configService;
    private readonly sequelize;
    constructor(configService: ConfigService, sequelize: Sequelize);
    onApplicationBootstrap(): Promise<void>;
}
