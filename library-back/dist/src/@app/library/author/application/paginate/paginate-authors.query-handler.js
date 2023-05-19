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
exports.PaginateAuthorsQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const core_1 = require("@aurorajs.dev/core");
const paginate_authors_query_1 = require("./paginate-authors.query");
const paginate_authors_service_1 = require("./paginate-authors.service");
let PaginateAuthorsQueryHandler = class PaginateAuthorsQueryHandler {
    constructor(paginateAuthorsService) {
        this.paginateAuthorsService = paginateAuthorsService;
    }
    async execute(query) {
        const { total, count, rows } = await this.paginateAuthorsService.main(query.queryStatement, query.constraint, query.cQMetadata);
        return new core_1.PaginationResponse(total, count, rows.map(item => item.toDTO()));
    }
};
PaginateAuthorsQueryHandler = __decorate([
    (0, cqrs_1.QueryHandler)(paginate_authors_query_1.PaginateAuthorsQuery),
    __metadata("design:paramtypes", [paginate_authors_service_1.PaginateAuthorsService])
], PaginateAuthorsQueryHandler);
exports.PaginateAuthorsQueryHandler = PaginateAuthorsQueryHandler;
//# sourceMappingURL=paginate-authors.query-handler.js.map