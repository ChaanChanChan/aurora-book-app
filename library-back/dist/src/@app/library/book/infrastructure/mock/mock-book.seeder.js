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
exports.MockBookSeeder = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
const value_objects_1 = require("../../domain/value-objects");
const book_aggregate_1 = require("../../domain/book.aggregate");
const mock_book_data_1 = require("./mock-book.data");
const _ = require("lodash");
let MockBookSeeder = class MockBookSeeder extends core_1.MockSeeder {
    constructor() {
        super();
        this._createMockDataLang();
    }
    _createMockDataLang() {
        this.collectionSource = [];
        for (const book of _.orderBy(mock_book_data_1.books, ['id'])) {
            this.collectionSource.push(book_aggregate_1.LibraryBook.register(new value_objects_1.BookId(book.id), new value_objects_1.BookTitle(book.title), new value_objects_1.BookPublishedAt(book.publishedAt), new value_objects_1.BookPrice(book.price), new value_objects_1.BookAuthorId(book.authorId), new value_objects_1.BookCreatedAt({ currentTimestamp: true }), new value_objects_1.BookUpdatedAt({ currentTimestamp: true }), new value_objects_1.BookDeletedAt(null)));
        }
    }
};
MockBookSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MockBookSeeder);
exports.MockBookSeeder = MockBookSeeder;
//# sourceMappingURL=mock-book.seeder.js.map