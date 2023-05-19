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
exports.PaginateBooksQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const core_1 = require("@aurorajs.dev/core");
const paginate_books_query_1 = require("./paginate-books.query");
const paginate_books_service_1 = require("./paginate-books.service");
let PaginateBooksQueryHandler = class PaginateBooksQueryHandler {
    constructor(paginateBooksService) {
        this.paginateBooksService = paginateBooksService;
    }
    async execute(query) {
        const { total, count, rows } = await this.paginateBooksService.main(query.queryStatement, query.constraint, query.cQMetadata);
        return new core_1.PaginationResponse(total, count, rows.map(item => item.toDTO()));
    }
};
PaginateBooksQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(paginate_books_query_1.PaginateBooksQuery),
    __metadata("design:paramtypes", [paginate_books_service_1.PaginateBooksService])
], PaginateBooksQueryHandler);
exports.PaginateBooksQueryHandler = PaginateBooksQueryHandler;
//# sourceMappingURL=paginate-books.query-handler.js.map