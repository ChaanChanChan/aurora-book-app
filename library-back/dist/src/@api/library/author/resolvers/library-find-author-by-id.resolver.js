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
exports.LibraryFindAuthorByIdResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@aurorajs.dev/core");
const library_find_author_by_id_handler_1 = require("../handlers/library-find-author-by-id.handler");
let LibraryFindAuthorByIdResolver = class LibraryFindAuthorByIdResolver {
    constructor(handler) {
        this.handler = handler;
    }
    async main(id, constraint, timezone) {
        return await this.handler.main(id, constraint, timezone);
    }
};
__decorate([
    (0, graphql_1.Query)('libraryFindAuthorById'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('constraint')),
    __param(2, (0, core_1.Timezone)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, core_1.QueryStatement, String]),
    __metadata("design:returntype", Promise)
], LibraryFindAuthorByIdResolver.prototype, "main", null);
LibraryFindAuthorByIdResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [library_find_author_by_id_handler_1.LibraryFindAuthorByIdHandler])
], LibraryFindAuthorByIdResolver);
exports.LibraryFindAuthorByIdResolver = LibraryFindAuthorByIdResolver;
//# sourceMappingURL=library-find-author-by-id.resolver.js.map