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
exports.MockAuthorSeeder = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
const value_objects_1 = require("../../domain/value-objects");
const author_aggregate_1 = require("../../domain/author.aggregate");
const mock_author_data_1 = require("./mock-author.data");
const _ = require("lodash");
let MockAuthorSeeder = class MockAuthorSeeder extends core_1.MockSeeder {
    constructor() {
        super();
        this._createMockDataLang();
    }
    _createMockDataLang() {
        this.collectionSource = [];
        for (const author of _.orderBy(mock_author_data_1.authors, ['id'])) {
            this.collectionSource.push(author_aggregate_1.LibraryAuthor.register(new value_objects_1.AuthorId(author.id), new value_objects_1.AuthorName(author.name), new value_objects_1.AuthorCreatedAt({ currentTimestamp: true }), new value_objects_1.AuthorUpdatedAt({ currentTimestamp: true }), new value_objects_1.AuthorDeletedAt(null)));
        }
    }
};
MockAuthorSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MockAuthorSeeder);
exports.MockAuthorSeeder = MockAuthorSeeder;
//# sourceMappingURL=mock-author.seeder.js.map