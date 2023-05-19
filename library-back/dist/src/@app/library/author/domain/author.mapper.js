"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorMapper = void 0;
const author_aggregate_1 = require("./author.aggregate");
const author_response_1 = require("./author.response");
const value_objects_1 = require("./value-objects");
class AuthorMapper {
    constructor(options = { eagerLoading: true }) {
        this.options = options;
    }
    mapModelToAggregate(author, cQMetadata) {
        if (!author)
            return;
        return this.makeAggregate(author, cQMetadata);
    }
    mapModelsToAggregates(authors, cQMetadata) {
        if (!Array.isArray(authors))
            return;
        return authors.map(author => this.makeAggregate(author, cQMetadata));
    }
    mapAggregateToResponse(author) {
        return this.makeResponse(author);
    }
    mapAggregatesToResponses(authors) {
        if (!Array.isArray(authors))
            return;
        return authors.map(author => this.makeResponse(author));
    }
    makeAggregate(author, cQMetadata) {
        return author_aggregate_1.LibraryAuthor.register(new value_objects_1.AuthorId(author.id, { undefinable: true }), new value_objects_1.AuthorName(author.name, { undefinable: true }), new value_objects_1.AuthorCreatedAt(author.createdAt, { undefinable: true }, { addTimezone: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.timezone }), new value_objects_1.AuthorUpdatedAt(author.updatedAt, { undefinable: true }, { addTimezone: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.timezone }), new value_objects_1.AuthorDeletedAt(author.deletedAt, { undefinable: true }, { addTimezone: cQMetadata === null || cQMetadata === void 0 ? void 0 : cQMetadata.timezone }));
    }
    makeResponse(author) {
        if (!author)
            return;
        return new author_response_1.AuthorResponse(author.id.value, author.name.value, author.createdAt.value, author.updatedAt.value, author.deletedAt.value);
    }
}
exports.AuthorMapper = AuthorMapper;
//# sourceMappingURL=author.mapper.js.map