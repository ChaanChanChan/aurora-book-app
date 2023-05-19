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
exports.RawSQLBooksQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const book_mapper_1 = require("../../domain/book.mapper");
const raw_sql_books_query_1 = require("./raw-sql-books.query");
const raw_sql_books_service_1 = require("./raw-sql-books.service");
let RawSQLBooksQueryHandler = class RawSQLBooksQueryHandler {
    constructor(rawSQLBooksService) {
        this.rawSQLBooksService = rawSQLBooksService;
        this.mapper = new book_mapper_1.BookMapper();
    }
    async execute(query) {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLBooksService.main(query.rawSQL, query.cQMetadata));
    }
};
RawSQLBooksQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(raw_sql_books_query_1.RawSQLBooksQuery),
    __metadata("design:paramtypes", [raw_sql_books_service_1.RawSQLBooksService])
], RawSQLBooksQueryHandler);
exports.RawSQLBooksQueryHandler = RawSQLBooksQueryHandler;
//# sourceMappingURL=raw-sql-books.query-handler.js.map