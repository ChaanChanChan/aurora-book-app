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
exports.LibraryUpsertBookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@aurorajs.dev/core");
const library_upsert_book_handler_1 = require("../handlers/library-upsert-book.handler");
let LibraryUpsertBookResolver = class LibraryUpsertBookResolver {
    constructor(handler) {
        this.handler = handler;
    }
    async main(payload, timezone) {
        return await this.handler.main(payload, timezone);
    }
};
__decorate([
    (0, graphql_1.Mutation)('libraryUpsertBook'),
    __param(0, (0, graphql_1.Args)('payload')),
    __param(1, (0, core_1.Timezone)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LibraryUpsertBookResolver.prototype, "main", null);
LibraryUpsertBookResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [library_upsert_book_handler_1.LibraryUpsertBookHandler])
], LibraryUpsertBookResolver);
exports.LibraryUpsertBookResolver = LibraryUpsertBookResolver;
//# sourceMappingURL=library-upsert-book.resolver.js.map