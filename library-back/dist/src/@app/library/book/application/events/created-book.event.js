"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedBookEvent = void 0;
class CreatedBookEvent {
    constructor(id, title, publishedAt, price, authorId, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.title = title;
        this.publishedAt = publishedAt;
        this.price = price;
        this.authorId = authorId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}
exports.CreatedBookEvent = CreatedBookEvent;
//# sourceMappingURL=created-book.event.js.map