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
exports.LibraryCreateAuthorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_1 = require("@aurorajs.dev/core");
const dto_1 = require("../dto");
const library_create_authors_handler_1 = require("../handlers/library-create-authors.handler");
let LibraryCreateAuthorsController = class LibraryCreateAuthorsController {
    constructor(handler) {
        this.handler = handler;
    }
    async main(payload, timezone) {
        return await this.handler.main(payload, timezone);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create authors in batch' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'The records has been created successfully.', type: [dto_1.LibraryAuthorDto] }),
    (0, swagger_1.ApiBody)({ type: [dto_1.LibraryCreateAuthorDto] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, core_1.Timezone)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", Promise)
], LibraryCreateAuthorsController.prototype, "main", null);
LibraryCreateAuthorsController = __decorate([
    (0, swagger_1.ApiTags)('[library] author'),
    (0, common_1.Controller)('library/authors/create'),
    __metadata("design:paramtypes", [library_create_authors_handler_1.LibraryCreateAuthorsHandler])
], LibraryCreateAuthorsController);
exports.LibraryCreateAuthorsController = LibraryCreateAuthorsController;
//# sourceMappingURL=library-create-authors.controller.js.map