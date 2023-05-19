"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryAuthor = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const created_author_event_1 = require("../application/events/created-author.event");
const updated_author_event_1 = require("../application/events/updated-author.event");
const deleted_author_event_1 = require("../application/events/deleted-author.event");
class LibraryAuthor extends cqrs_1.AggregateRoot {
    constructor(id, name, createdAt, updatedAt, deletedAt) {
        super();
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
    static register(id, name, createdAt, updatedAt, deletedAt) {
        return new LibraryAuthor(id, name, createdAt, updatedAt, deletedAt);
    }
    created(author) {
        var _a, _b, _c;
        this.apply(new created_author_event_1.CreatedAuthorEvent(author.id.value, author.name.value, (_a = author.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = author.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = author.deletedAt) === null || _c === void 0 ? void 0 : _c.value));
    }
    updated(author) {
        var _a, _b, _c, _d, _e;
        this.apply(new updated_author_event_1.UpdatedAuthorEvent((_a = author.id) === null || _a === void 0 ? void 0 : _a.value, (_b = author.name) === null || _b === void 0 ? void 0 : _b.value, (_c = author.createdAt) === null || _c === void 0 ? void 0 : _c.value, (_d = author.updatedAt) === null || _d === void 0 ? void 0 : _d.value, (_e = author.deletedAt) === null || _e === void 0 ? void 0 : _e.value));
    }
    deleted(author) {
        var _a, _b, _c;
        this.apply(new deleted_author_event_1.DeletedAuthorEvent(author.id.value, author.name.value, (_a = author.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = author.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = author.deletedAt) === null || _c === void 0 ? void 0 : _c.value));
    }
    toDTO() {
        var _a, _b, _c;
        return {
            id: this.id.value,
            name: this.name.value,
            createdAt: (_a = this.createdAt) === null || _a === void 0 ? void 0 : _a.value,
            updatedAt: (_b = this.updatedAt) === null || _b === void 0 ? void 0 : _b.value,
            deletedAt: (_c = this.deletedAt) === null || _c === void 0 ? void 0 : _c.value,
        };
    }
    toRepository() {
        var _a, _b, _c;
        return {
            id: this.id.value,
            name: this.name.value,
            createdAt: (_a = this.createdAt) === null || _a === void 0 ? void 0 : _a.value,
            updatedAt: (_b = this.updatedAt) === null || _b === void 0 ? void 0 : _b.value,
            deletedAt: (_c = this.deletedAt) === null || _c === void 0 ? void 0 : _c.value,
        };
    }
}
exports.LibraryAuthor = LibraryAuthor;
//# sourceMappingURL=author.aggregate.js.map