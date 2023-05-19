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
exports.CreateBooksService = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const value_objects_1 = require("../../domain/value-objects");
const book_repository_1 = require("../../domain/book.repository");
const book_aggregate_1 = require("../../domain/book.aggregate");
const add_books_context_event_1 = require("../events/add-books-context.event");
let CreateBooksService = class CreateBooksService {
    constructor(publisher, repository) {
        this.publisher = publisher;
        this.repository = repository;
    }
    async main(books, cQMetadata) {
        const aggregateBooks = books.map(book => book_aggregate_1.LibraryBook.register(book.id, book.title, book.publishedAt, book.price, book.authorId, new value_objects_1.BookCreatedAt({ currentTimestamp: true }), new value_objects_1.BookUpdatedAt({ currentTimestamp: true }), null));
        await this.repository.insert(aggregateBooks, { insertOptions: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.repositoryOptions });
        const booksRegistered = this.publisher.mergeObjectContext(new add_books_context_event_1.AddBooksContextEvent(aggregateBooks));
        booksRegistered.created();
        booksRegistered.commit();
    }
};
CreateBooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cqrs_1.EventPublisher,
        book_repository_1.IBookRepository])
], CreateBooksService);
exports.CreateBooksService = CreateBooksService;
//# sourceMappingURL=create-books.service.js.map