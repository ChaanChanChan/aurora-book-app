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
exports.FindAuthorByIdQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const author_mapper_1 = require("../../domain/author.mapper");
const value_objects_1 = require("../../domain/value-objects");
const find_author_by_id_query_1 = require("./find-author-by-id.query");
const find_author_by_id_service_1 = require("./find-author-by-id.service");
let FindAuthorByIdQueryHandler = class FindAuthorByIdQueryHandler {
    constructor(findAuthorByIdService) {
        this.findAuthorByIdService = findAuthorByIdService;
        this.mapper = new author_mapper_1.AuthorMapper();
    }
    async execute(query) {
        const author = await this.findAuthorByIdService.main(new value_objects_1.AuthorId(query.id), query.constraint, query.cQMetadata);
        return this.mapper.mapAggregateToResponse(author);
    }
};
FindAuthorByIdQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(find_author_by_id_query_1.FindAuthorByIdQuery),
    __metadata("design:paramtypes", [find_author_by_id_service_1.FindAuthorByIdService])
], FindAuthorByIdQueryHandler);
exports.FindAuthorByIdQueryHandler = FindAuthorByIdQueryHandler;
//# sourceMappingURL=find-author-by-id.query-handler.js.map