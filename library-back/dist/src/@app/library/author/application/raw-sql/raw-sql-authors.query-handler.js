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
exports.RawSQLAuthorsQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const author_mapper_1 = require("../../domain/author.mapper");
const raw_sql_authors_query_1 = require("./raw-sql-authors.query");
const raw_sql_authors_service_1 = require("./raw-sql-authors.service");
let RawSQLAuthorsQueryHandler = class RawSQLAuthorsQueryHandler {
    constructor(rawSQLAuthorsService) {
        this.rawSQLAuthorsService = rawSQLAuthorsService;
        this.mapper = new author_mapper_1.AuthorMapper();
    }
    async execute(query) {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLAuthorsService.main(query.rawSQL, query.cQMetadata));
    }
};
RawSQLAuthorsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(raw_sql_authors_query_1.RawSQLAuthorsQuery),
    __metadata("design:paramtypes", [raw_sql_authors_service_1.RawSQLAuthorsService])
], RawSQLAuthorsQueryHandler);
exports.RawSQLAuthorsQueryHandler = RawSQLAuthorsQueryHandler;
//# sourceMappingURL=raw-sql-authors.query-handler.js.map