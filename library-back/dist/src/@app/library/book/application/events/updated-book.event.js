"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedBookEvent = void 0;
class UpdatedBookEvent {
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
exports.UpdatedBookEvent = UpdatedBookEvent;
//# sourceMappingURL=updated-book.event.js.map