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
exports.LibraryFindAuthorByIdController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@aurorajs.dev/core");
const dto_1 = require("../dto");
const library_find_author_by_id_handler_1 = require("../handlers/library-find-author-by-id.handler");
let LibraryFindAuthorByIdController = class LibraryFindAuthorByIdController {
    constructor(handler) {
        this.handler = handler;
    }
    async main(id, constraint, timezone) {
        return await this.handler.main(id, constraint, timezone);
    }
};
__decorate([
    (0, common_1.Post)(':id'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOperation)({ summary: 'Find author by id' }),
    (0, swagger_1.ApiOkResponse)({ description: 'The record has been successfully requested.', type: dto_1.LibraryAuthorDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('constraint')),
    __param(2, (0, core_1.Timezone)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, core_1.QueryStatement, String]),
    __metadata("design:returntype", Promise)
], LibraryFindAuthorByIdController.prototype, "main", null);
LibraryFindAuthorByIdController = __decorate([
    (0, swagger_1.ApiTags)('[library] author'),
    (0, common_1.Controller)('library/author/find'),
    __metadata("design:paramtypes", [library_find_author_by_id_handler_1.LibraryFindAuthorByIdHandler])
], LibraryFindAuthorByIdController);
exports.LibraryFindAuthorByIdController = LibraryFindAuthorByIdController;
//# sourceMappingURL=library-find-author-by-id.controller.js.map