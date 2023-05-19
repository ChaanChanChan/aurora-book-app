"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryBook = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const created_book_event_1 = require("../application/events/created-book.event");
const updated_book_event_1 = require("../application/events/updated-book.event");
const deleted_book_event_1 = require("../application/events/deleted-book.event");
class LibraryBook extends cqrs_1.AggregateRoot {
    constructor(id, title, publishedAt, price, authorId, createdAt, updatedAt, deletedAt, author) {
        super();
        this.id = id;
        this.title = title;
        this.publishedAt = publishedAt;
        this.price = price;
        this.authorId = authorId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.author = author;
    }
    static register(id, title, publishedAt, price, authorId, createdAt, updatedAt, deletedAt, author) {
        return new LibraryBook(id, title, publishedAt, price, authorId, createdAt, updatedAt, deletedAt, author);
    }
    created(book) {
        var _a, _b, _c;
        this.apply(new created_book_event_1.CreatedBookEvent(book.id.value, book.title.value, book.publishedAt.value, book.price.value, book.authorId.value, (_a = book.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = book.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = book.deletedAt) === null || _c === void 0 ? void 0 : _c.value));
    }
    updated(book) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.apply(new updated_book_event_1.UpdatedBookEvent((_a = book.id) === null || _a === void 0 ? void 0 : _a.value, (_b = book.title) === null || _b === void 0 ? void 0 : _b.value, (_c = book.publishedAt) === null || _c === void 0 ? void 0 : _c.value, (_d = book.price) === null || _d === void 0 ? void 0 : _d.value, (_e = book.authorId) === null || _e === void 0 ? void 0 : _e.value, (_f = book.createdAt) === null || _f === void 0 ? void 0 : _f.value, (_g = book.updatedAt) === null || _g === void 0 ? void 0 : _g.value, (_h = book.deletedAt) === null || _h === void 0 ? void 0 : _h.value));
    }
    deleted(book) {
        var _a, _b, _c;
        this.apply(new deleted_book_event_1.DeletedBookEvent(book.id.value, book.title.value, book.publishedAt.value, book.price.value, book.authorId.value, (_a = book.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = book.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = book.deletedAt) === null || _c === void 0 ? void 0 : _c.value));
    }
    toDTO() {
        var _a, _b, _c, _d;
        return {
            id: this.id.value,
            title: this.title.value,
            publishedAt: this.publishedAt.value,
            price: this.price.value,
            authorId: this.authorId.value,
            createdAt: (_a = this.createdAt) === null || _a === void 0 ? void 0 : _a.value,
            updatedAt: (_b = this.updatedAt) === null || _b === void 0 ? void 0 : _b.value,
            deletedAt: (_c = this.deletedAt) === null || _c === void 0 ? void 0 : _c.value,
            author: (_d = this.author) === null || _d === void 0 ? void 0 : _d.toDTO(),
        };
    }
    toRepository() {
        var _a, _b, _c, _d;
        return {
            id: this.id.value,
            title: this.title.value,
            publishedAt: this.publishedAt.value,
            price: this.price.value,
            authorId: this.authorId.value,
            createdAt: (_a = this.createdAt) === null || _a === void 0 ? void 0 : _a.value,
            updatedAt: (_b = this.updatedAt) === null || _b === void 0 ? void 0 : _b.value,
            deletedAt: (_c = this.deletedAt) === null || _c === void 0 ? void 0 : _c.value,
            author: (_d = this.author) === null || _d === void 0 ? void 0 : _d.toDTO(),
        };
    }
}
exports.LibraryBook = LibraryBook;
//# sourceMappingURL=book.aggregate.js.map