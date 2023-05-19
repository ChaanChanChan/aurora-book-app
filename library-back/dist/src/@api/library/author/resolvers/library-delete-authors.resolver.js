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
exports.LibraryDeleteAuthorsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@aurorajs.dev/core");
const library_delete_authors_handler_1 = require("../handlers/library-delete-authors.handler");
let LibraryDeleteAuthorsResolver = class LibraryDeleteAuthorsResolver {
    constructor(handler) {
        this.handler = handler;
    }
    async main(queryStatement, constraint, timezone) {
        return await this.handler.main(queryStatement, constraint, timezone);
    }
};
__decorate([
    (0, graphql_1.Mutation)('libraryDeleteAuthors'),
    __param(0, (0, graphql_1.Args)('query')),
    __param(1, (0, graphql_1.Args)('constraint')),
    __param(2, (0, core_1.Timezone)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.QueryStatement,
        core_1.QueryStatement, String]),
    __metadata("design:returntype", Promise)
], LibraryDeleteAuthorsResolver.prototype, "main", null);
LibraryDeleteAuthorsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [library_delete_authors_handler_1.LibraryDeleteAuthorsHandler])
], LibraryDeleteAuthorsResolver);
exports.LibraryDeleteAuthorsResolver = LibraryDeleteAuthorsResolver;
//# sourceMappingURL=library-delete-authors.resolver.js.map