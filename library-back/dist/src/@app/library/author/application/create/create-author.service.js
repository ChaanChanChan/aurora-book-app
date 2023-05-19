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
exports.CreateAuthorService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const author_repository_1 = require("../../domain/author.repository");
const author_aggregate_1 = require("../../domain/author.aggregate");
const value_objects_1 = require("../../domain/value-objects");
let CreateAuthorService = class CreateAuthorService {
    constructor(publisher, repository) {
        this.publisher = publisher;
        this.repository = repository;
    }
    async main(payload, cQMetadata) {
        const author = author_aggregate_1.LibraryAuthor.register(payload.id, payload.name, new value_objects_1.AuthorCreatedAt({ currentTimestamp: true }), new value_objects_1.AuthorUpdatedAt({ currentTimestamp: true }), null);
        await this.repository.create(author, { createOptions: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.repositoryOptions });
        const authorRegister = this.publisher.mergeObjectContext(author);
        authorRegister.created(author);
        authorRegister.commit();
    }
};
CreateAuthorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.EventPublisher,
        author_repository_1.IAuthorRepository])
], CreateAuthorService);
exports.CreateAuthorService = CreateAuthorService;
//# sourceMappingURL=create-author.service.js.map