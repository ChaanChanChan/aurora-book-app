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
exports.LibraryBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const library_author_dto_1 = require("../../../library/author/dto/library-author.dto");
class LibraryBookDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'id [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryBookDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'title [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryBookDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'publishedAt [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryBookDto.prototype, "publishedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'price [input here api field description]',
    }),
    __metadata("design:type", Number)
], LibraryBookDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'authorId [input here api field description]',
        example: '977ddc11-b03a-5a77-8a40-26043e9de0d0',
    }),
    __metadata("design:type", String)
], LibraryBookDto.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => library_author_dto_1.LibraryAuthorDto,
        description: 'LibraryAuthor [input here api field description]',
    }),
    __metadata("design:type", library_author_dto_1.LibraryAuthorDto)
], LibraryBookDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'createdAt [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryBookDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'updatedAt [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryBookDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'deletedAt [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryBookDto.prototype, "deletedAt", void 0);
exports.LibraryBookDto = LibraryBookDto;
//# sourceMappingURL=library-book.dto.js.map