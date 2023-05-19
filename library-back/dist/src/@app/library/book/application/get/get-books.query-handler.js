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
exports.GetBooksQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const book_mapper_1 = require("../../domain/book.mapper");
const get_books_query_1 = require("./get-books.query");
const get_books_service_1 = require("./get-books.service");
let GetBooksQueryHandler = class GetBooksQueryHandler {
    constructor(getBooksService) {
        this.getBooksService = getBooksService;
        this.mapper = new book_mapper_1.BookMapper();
    }
    async execute(query) {
        return this.mapper.mapAggregatesToResponses(await this.getBooksService.main(query.queryStatement, query.constraint, query.cQMetadata));
    }
};
GetBooksQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_books_query_1.GetBooksQuery),
    __metadata("design:paramtypes", [get_books_service_1.GetBooksService])
], GetBooksQueryHandler);
exports.GetBooksQueryHandler = GetBooksQueryHandler;
//# sourceMappingURL=get-books.query-handler.js.map