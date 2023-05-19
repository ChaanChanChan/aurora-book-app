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
exports.DeleteAuthorsService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const author_repository_1 = require("../../domain/author.repository");
const add_authors_context_event_1 = require("../events/add-authors-context.event");
let DeleteAuthorsService = class DeleteAuthorsService {
    constructor(publisher, repository) {
        this.publisher = publisher;
        this.repository = repository;
    }
    async main(queryStatement, constraint, cQMetadata) {
        const authors = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });
        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.repositoryOptions,
        });
        const authorsRegistered = this.publisher.mergeObjectContext(new add_authors_context_event_1.AddAuthorsContextEvent(authors));
        authorsRegistered.deleted();
        authorsRegistered.commit();
    }
};
DeleteAuthorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.EventPublisher,
        author_repository_1.IAuthorRepository])
], DeleteAuthorsService);
exports.DeleteAuthorsService = DeleteAuthorsService;
//# sourceMappingURL=delete-authors.service.js.map