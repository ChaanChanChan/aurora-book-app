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
exports.MockBookRepository = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
const value_objects_1 = require("../../domain/value-objects");
const book_aggregate_1 = require("../../domain/book.aggregate");
const mock_book_data_1 = require("./mock-book.data");
let MockBookRepository = class MockBookRepository extends core_1.MockRepository {
    constructor() {
        super();
        this.aggregateName = 'LibraryBook';
        this.deletedAtInstance = new value_objects_1.BookDeletedAt(null);
        this.createSourceMockData();
    }
    reset() {
        this.createSourceMockData();
    }
    createSourceMockData() {
        this.collectionSource = [];
        const now = core_1.Utils.nowTimestamp();
        for (const itemCollection of mock_book_data_1.books) {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;
            this.collectionSource.push(book_aggregate_1.LibraryBook.register(new value_objects_1.BookId(itemCollection.id), new value_objects_1.BookTitle(itemCollection.title), new value_objects_1.BookPublishedAt(itemCollection.publishedAt), new value_objects_1.BookPrice(itemCollection.price), new value_objects_1.BookAuthorId(itemCollection.authorId), new value_objects_1.BookCreatedAt(itemCollection.createdAt), new value_objects_1.BookUpdatedAt(itemCollection.updatedAt), new value_objects_1.BookDeletedAt(itemCollection.deletedAt)));
        }
    }
};
MockBookRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MockBookRepository);
exports.MockBookRepository = MockBookRepository;
//# sourceMappingURL=mock-book.repository.js.map