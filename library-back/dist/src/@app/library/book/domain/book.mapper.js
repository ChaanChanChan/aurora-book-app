"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMapper = void 0;
const book_aggregate_1 = require("./book.aggregate");
const book_response_1 = require("./book.response");
const value_objects_1 = require("./value-objects");
const author_mapper_1 = require("../../author/domain/author.mapper");
class BookMapper {
    constructor(options = { eagerLoading: true }) {
        this.options = options;
    }
    mapModelToAggregate(book, cQMetadata) {
        if (!book)
            return;
        return this.makeAggregate(book, cQMetadata);
    }
    mapModelsToAggregates(books, cQMetadata) {
        if (!Array.isArray(books))
            return;
        return books.map(book => this.makeAggregate(book, cQMetadata));
    }
    mapAggregateToResponse(book) {
        return this.makeResponse(book);
    }
    mapAggregatesToResponses(books) {
        if (!Array.isArray(books))
            return;
        return books.map(book => this.makeResponse(book));
    }
    makeAggregate(book, cQMetadata) {
        return book_aggregate_1.LibraryBook.register(new value_objects_1.BookId(book.id, { undefinable: true }), new value_objects_1.BookTitle(book.title, { undefinable: true }), new value_objects_1.BookPublishedAt(book.publishedAt, { undefinable: true }), new value_objects_1.BookPrice(book.price, { undefinable: true }), new value_objects_1.BookAuthorId(book.authorId, { undefinable: true }), new value_objects_1.BookCreatedAt(book.createdAt, { undefinable: true }, { addTimezone: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.timezone }), new value_objects_1.BookUpdatedAt(book.updatedAt, { undefinable: true }, { addTimezone: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.timezone }), new value_objects_1.BookDeletedAt(book.deletedAt, { undefinable: true }, { addTimezone: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.timezone }), this.options.eagerLoading ? new author_mapper_1.AuthorMapper({ eagerLoading: true }).mapModelToAggregate(book.author, cQMetadata) : undefined);
    }
    makeResponse(book) {
        if (!book)
            return;
        return new book_response_1.BookResponse(book.id.value, book.title.value, book.publishedAt.value, book.price.value, book.authorId.value, book.createdAt.value, book.updatedAt.value, book.deletedAt.value, this.options.eagerLoading ? new author_mapper_1.AuthorMapper({ eagerLoading: true }).mapAggregateToResponse(book.author) : undefined);
    }
}
exports.BookMapper = BookMapper;
//# sourceMappingURL=book.mapper.js.map