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
exports.MockAuthorRepository = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
const value_objects_1 = require("../../domain/value-objects");
const author_aggregate_1 = require("../../domain/author.aggregate");
const mock_author_data_1 = require("./mock-author.data");
let MockAuthorRepository = class MockAuthorRepository extends core_1.MockRepository {
    constructor() {
        super();
        this.aggregateName = 'LibraryAuthor';
        this.deletedAtInstance = new value_objects_1.AuthorDeletedAt(null);
        this.createSourceMockData();
    }
    reset() {
        this.createSourceMockData();
    }
    createSourceMockData() {
        this.collectionSource = [];
        const now = core_1.Utils.nowTimestamp();
        for (const itemCollection of mock_author_data_1.authors) {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;
            this.collectionSource.push(author_aggregate_1.LibraryAuthor.register(new value_objects_1.AuthorId(itemCollection.id), new value_objects_1.AuthorName(itemCollection.name), new value_objects_1.AuthorCreatedAt(itemCollection.createdAt), new value_objects_1.AuthorUpdatedAt(itemCollection.updatedAt), new value_objects_1.AuthorDeletedAt(itemCollection.deletedAt)));
        }
    }
};
MockAuthorRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MockAuthorRepository);
exports.MockAuthorRepository = MockAuthorRepository;
//# sourceMappingURL=mock-author.repository.js.map