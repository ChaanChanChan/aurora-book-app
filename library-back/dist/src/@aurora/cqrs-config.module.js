"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CqrsConfigModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const core_1 = require("@aurorajs.dev/core");
let CqrsConfigModule = class CqrsConfigModule {
};
CqrsConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
        ],
        providers: [
            {
                provide: core_1.ICommandBus,
                useClass: core_1.NestCommandBus,
            },
            {
                provide: core_1.IQueryBus,
                useClass: core_1.NestQueryBus,
            },
            {
                provide: core_1.ICriteria,
                useClass: core_1.SequelizeCriteria,
            },
        ],
        exports: [
            cqrs_1.CqrsModule,
            {
                provide: core_1.ICommandBus,
                useClass: core_1.NestCommandBus,
            },
            {
                provide: core_1.IQueryBus,
                useClass: core_1.NestQueryBus,
            },
            {
                provide: core_1.ICriteria,
                useClass: core_1.SequelizeCriteria,
            },
        ],
    })
], CqrsConfigModule);
exports.CqrsConfigModule = CqrsConfigModule;
//# sourceMappingURL=cqrs-config.module.js.map