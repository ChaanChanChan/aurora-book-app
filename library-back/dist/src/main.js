"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const core_2 = require("@aurorajs.dev/core");
const app_module_1 = require("./app.module");
const express_1 = require("express");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const advancedFormat = require("dayjs/plugin/advancedFormat");
const weekOfYear = require("dayjs/plugin/weekOfYear");
const isoWeek = require("dayjs/plugin/isoWeek");
const dayOfYear = require("dayjs/plugin/dayOfYear");
const dayjs = require("dayjs");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(weekOfYear);
dayjs.extend(isoWeek);
dayjs.extend(dayOfYear);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    if (configService.get('SWAGGER') === 'true') {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Aurora API')
            .setDescription('Aurora API description')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    app.use((0, express_1.json)({ limit: configService.get('APP_LIMIT_REQUEST_SIZE') }));
    app.use((0, express_1.urlencoded)({ extended: true, limit: configService.get('APP_LIMIT_REQUEST_SIZE') }));
    (0, core_2.setTimeZoneApplication)(configService, dayjs);
    app.enableCors();
    await app.listen(configService.get('APP_PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map