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
exports.LibraryFindBookController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@aurorajs.dev/core");
const dto_1 = require("../dto");
const library_find_book_handler_1 = require("../handlers/library-find-book.handler");
let LibraryFindBookController = class LibraryFindBookController {
    constructor(handler) {
        this.handler = handler;
    }
    async main(queryStatement, constraint, timezone) {
        return await this.handler.main(queryStatement, constraint, timezone);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find book according to query' }),
    (0, swagger_1.ApiOkResponse)({ description: 'The record has been successfully created.', type: dto_1.LibraryBookDto }),
    (0, swagger_1.ApiBody)({ type: core_1.QueryStatement }),
    (0, swagger_1.ApiQuery)({ name: 'query', type: core_1.QueryStatement }),
    __param(0, (0, common_1.Body)('query')),
    __param(1, (0, common_1.Body)('constraint')),
    __param(2, (0, core_1.Timezone)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.QueryStatement,
        core_1.QueryStatement, String]),
    __metadata("design:returntype", Promise)
], LibraryFindBookController.prototype, "main", null);
LibraryFindBookController = __decorate([
    (0, swagger_1.ApiTags)('[library] book'),
    (0, common_1.Controller)('library/book/find'),
    __metadata("design:paramtypes", [library_find_book_handler_1.LibraryFindBookHandler])
], LibraryFindBookController);
exports.LibraryFindBookController = LibraryFindBookController;
//# sourceMappingURL=library-find-book.controller.js.map