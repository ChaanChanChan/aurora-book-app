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
exports.FindBookQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const book_mapper_1 = require("../../domain/book.mapper");
const find_book_query_1 = require("./find-book.query");
const find_book_service_1 = require("./find-book.service");
let FindBookQueryHandler = class FindBookQueryHandler {
    constructor(findBookService) {
        this.findBookService = findBookService;
        this.mapper = new book_mapper_1.BookMapper();
    }
    async execute(query) {
        const book = await this.findBookService.main(query.queryStatement, query.constraint, query.cQMetadata);
        return this.mapper.mapAggregateToResponse(book);
    }
};
FindBookQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(find_book_query_1.FindBookQuery),
    __metadata("design:paramtypes", [find_book_service_1.FindBookService])
], FindBookQueryHandler);
exports.FindBookQueryHandler = FindBookQueryHandler;
//# sourceMappingURL=find-book.query-handler.js.map