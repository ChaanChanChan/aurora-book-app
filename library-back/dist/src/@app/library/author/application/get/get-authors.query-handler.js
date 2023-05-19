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
exports.GetAuthorsQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const author_mapper_1 = require("../../domain/author.mapper");
const get_authors_query_1 = require("./get-authors.query");
const get_authors_service_1 = require("./get-authors.service");
let GetAuthorsQueryHandler = class GetAuthorsQueryHandler {
    constructor(getAuthorsService) {
        this.getAuthorsService = getAuthorsService;
        this.mapper = new author_mapper_1.AuthorMapper();
    }
    async execute(query) {
        return this.mapper.mapAggregatesToResponses(await this.getAuthorsService.main(query.queryStatement, query.constraint, query.cQMetadata));
    }
};
GetAuthorsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_authors_query_1.GetAuthorsQuery),
    __metadata("design:paramtypes", [get_authors_service_1.GetAuthorsService])
], GetAuthorsQueryHandler);
exports.GetAuthorsQueryHandler = GetAuthorsQueryHandler;
//# sourceMappingURL=get-authors.query-handler.js.map