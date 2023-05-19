"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const cqrs_1 = require("@nestjs/cqrs");
const core_1 = require("@aurorajs.dev/core");
const cqrs_config_module_1 = require("./cqrs-config.module");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_1.CacheModule.register(),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            core_1.CoreModule,
            cqrs_config_module_1.CqrsConfigModule,
            cqrs_1.CqrsModule
        ],
        providers: [
            core_1.AddI18NConstraintService,
            {
                provide: core_1.AuditingRunner,
                useClass: core_1.AuditingRunnerDisabledImplementationService,
            },
        ],
        exports: [
            core_1.AddI18NConstraintService,
            core_1.AuditingRunner,
            common_1.CacheModule,
            config_1.ConfigModule,
            cqrs_config_module_1.CqrsConfigModule
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map