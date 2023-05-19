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
exports.LibraryCreateBookController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@aurorajs.dev/core");
const dto_1 = require("../dto");
const library_create_book_handler_1 = require("../handlers/library-create-book.handler");
let LibraryCreateBookController = class LibraryCreateBookController {
    constructor(handler) {
        this.handler = handler;
    }
    async main(payload, timezone) {
        return await this.handler.main(payload, timezone);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create book' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'The record has been successfully created.', type: dto_1.LibraryBookDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, core_1.Timezone)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LibraryCreateBookDto, String]),
    __metadata("design:returntype", Promise)
], LibraryCreateBookController.prototype, "main", null);
LibraryCreateBookController = __decorate([
    (0, swagger_1.ApiTags)('[library] book'),
    (0, common_1.Controller)('library/book/create'),
    __metadata("design:paramtypes", [library_create_book_handler_1.LibraryCreateBookHandler])
], LibraryCreateBookController);
exports.LibraryCreateBookController = LibraryCreateBookController;
//# sourceMappingURL=library-create-book.controller.js.map