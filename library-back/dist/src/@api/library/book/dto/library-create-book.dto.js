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
exports.LibraryCreateBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class LibraryCreateBookDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'id [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryCreateBookDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'title [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryCreateBookDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'publishedAt [input here api field description]',
    }),
    __metadata("design:type", String)
], LibraryCreateBookDto.prototype, "publishedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'price [input here api field description]',
    }),
    __metadata("design:type", Number)
], LibraryCreateBookDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'authorId [input here api field description]',
        example: '977ddc11-b03a-5a77-8a40-26043e9de0d0',
    }),
    __metadata("design:type", String)
], LibraryCreateBookDto.prototype, "authorId", void 0);
exports.LibraryCreateBookDto = LibraryCreateBookDto;
//# sourceMappingURL=library-create-book.dto.js.map