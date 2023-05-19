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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAuthorQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const author_mapper_1 = require("../../domain/author.mapper");
const find_author_query_1 = require("./find-author.query");
const find_author_service_1 = require("./find-author.service");
let FindAuthorQueryHandler = class FindAuthorQueryHandler {
    constructor(findAuthorService) {
        this.findAuthorService = findAuthorService;
        this.mapper = new author_mapper_1.AuthorMapper();
    }
    async execute(query) {
        const author = await this.findAuthorService.main(query.queryStatement, query.constraint, query.cQMetadata);
        return this.mapper.mapAggregateToResponse(author);
    }
};
FindAuthorQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(find_author_query_1.FindAuthorQuery),
    __metadata("design:paramtypes", [find_author_service_1.FindAuthorService])
], FindAuthorQueryHandler);
exports.FindAuthorQueryHandler = FindAuthorQueryHandler;
//# sourceMappingURL=find-author.query-handler.js.map