"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBooksContextEvent = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const created_book_event_1 = require("./created-book.event");
const created_books_event_1 = require("./created-books.event");
const updated_book_event_1 = require("./updated-book.event");
const updated_books_event_1 = require("./updated-books.event");
const deleted_book_event_1 = require("./deleted-book.event");
const deleted_books_event_1 = require("./deleted-books.event");
class AddBooksContextEvent extends cqrs_1.AggregateRoot {
    constructor(aggregateRoots = []) {
        super();
        this.aggregateRoots = aggregateRoots;
    }
    *[Symbol.iterator]() {
        for (const aggregateRoot of this.aggregateRoots)
            yield aggregateRoot;
    }
    created() {
        this.apply(new created_books_event_1.CreatedBooksEvent(this.aggregateRoots.map(book => {
            var _a, _b, _c;
            return new created_book_event_1.CreatedBookEvent(book.id.value, book.title.value, book.publishedAt.value, book.price.value, book.authorId.value, (_a = book.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = book.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = book.deletedAt) === null || _c === void 0 ? void 0 : _c.value);
        })));
    }
    updated() {
        this.apply(new updated_books_event_1.UpdatedBooksEvent(this.aggregateRoots.map(book => {
            var _a, _b, _c;
            return new updated_book_event_1.UpdatedBookEvent(book.id.value, book.title.value, book.publishedAt.value, book.price.value, book.authorId.value, (_a = book.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = book.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = book.deletedAt) === null || _c === void 0 ? void 0 : _c.value);
        })));
    }
    deleted() {
        this.apply(new deleted_books_event_1.DeletedBooksEvent(this.aggregateRoots.map(book => {
            var _a, _b, _c;
            return new deleted_book_event_1.DeletedBookEvent(book.id.value, book.title.value, book.publishedAt.value, book.price.value, book.authorId.value, (_a = book.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = book.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = book.deletedAt) === null || _c === void 0 ? void 0 : _c.value);
        })));
    }
}
exports.AddBooksContextEvent = AddBooksContextEvent;
//# sourceMappingURL=add-books-context.event.js.map