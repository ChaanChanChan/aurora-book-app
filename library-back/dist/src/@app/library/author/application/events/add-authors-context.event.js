"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAuthorsContextEvent = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const created_author_event_1 = require("./created-author.event");
const created_authors_event_1 = require("./created-authors.event");
const updated_author_event_1 = require("./updated-author.event");
const updated_authors_event_1 = require("./updated-authors.event");
const deleted_author_event_1 = require("./deleted-author.event");
const deleted_authors_event_1 = require("./deleted-authors.event");
class AddAuthorsContextEvent extends cqrs_1.AggregateRoot {
    constructor(aggregateRoots = []) {
        super();
        this.aggregateRoots = aggregateRoots;
    }
    *[Symbol.iterator]() {
        for (const aggregateRoot of this.aggregateRoots)
            yield aggregateRoot;
    }
    created() {
        this.apply(new created_authors_event_1.CreatedAuthorsEvent(this.aggregateRoots.map(author => {
            var _a, _b, _c;
            return new created_author_event_1.CreatedAuthorEvent(author.id.value, author.name.value, (_a = author.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = author.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = author.deletedAt) === null || _c === void 0 ? void 0 : _c.value);
        })));
    }
    updated() {
        this.apply(new updated_authors_event_1.UpdatedAuthorsEvent(this.aggregateRoots.map(author => {
            var _a, _b, _c;
            return new updated_author_event_1.UpdatedAuthorEvent(author.id.value, author.name.value, (_a = author.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = author.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = author.deletedAt) === null || _c === void 0 ? void 0 : _c.value);
        })));
    }
    deleted() {
        this.apply(new deleted_authors_event_1.DeletedAuthorsEvent(this.aggregateRoots.map(author => {
            var _a, _b, _c;
            return new deleted_author_event_1.DeletedAuthorEvent(author.id.value, author.name.value, (_a = author.createdAt) === null || _a === void 0 ? void 0 : _a.value, (_b = author.updatedAt) === null || _b === void 0 ? void 0 : _b.value, (_c = author.deletedAt) === null || _c === void 0 ? void 0 : _c.value);
        })));
    }
}
exports.AddAuthorsContextEvent = AddAuthorsContextEvent;
//# sourceMappingURL=add-authors-context.event.js.map