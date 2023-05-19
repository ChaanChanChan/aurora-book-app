"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryUpsertAuthorController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@aurorajs.dev/core");
const dto_1 = require("../dto");
const library_upsert_author_handler_1 = require("../handlers/library-upsert-author.handler");
let LibraryUpsertAuthorController = class LibraryUpsertAuthorController {
    constructor(handler) {
        this.handler = handler;
    }
    async main(payload, timezone) {
        return await this.handler.main(payload, timezone);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Upsert author' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'The record has been successfully upserted.', type: dto_1.LibraryAuthorDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, core_1.Timezone)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LibraryUpdateAuthorByIdDto, String]),
    __metadata("design:returntype", Promise)
], LibraryUpsertAuthorController.prototype, "main", null);
LibraryUpsertAuthorController = __decorate([
    (0, swagger_1.ApiTags)('[library] author'),
    (0, common_1.Controller)('library/author/upsert'),
    __metadata("design:paramtypes", [library_upsert_author_handler_1.LibraryUpsertAuthorHandler])
], LibraryUpsertAuthorController);
exports.LibraryUpsertAuthorController = LibraryUpsertAuthorController;
//# sourceMappingURL=library-upsert-author.controller.js.map