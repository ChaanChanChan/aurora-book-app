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
exports.CreateBooksCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_books_command_1 = require("./create-books.command");
const create_books_service_1 = require("./create-books.service");
const value_objects_1 = require("../../domain/value-objects");
let CreateBooksCommandHandler = class CreateBooksCommandHandler {
    constructor(createBooksService) {
        this.createBooksService = createBooksService;
    }
    async execute(command) {
        await this.createBooksService.main(command.payload
            .map(book => {
            return {
                id: new value_objects_1.BookId(book.id),
                title: new value_objects_1.BookTitle(book.title),
                publishedAt: new value_objects_1.BookPublishedAt(book.publishedAt),
                price: new value_objects_1.BookPrice(book.price),
                authorId: new value_objects_1.BookAuthorId(book.authorId),
            };
        }), command.cQMetadata);
    }
};
CreateBooksCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_books_command_1.CreateBooksCommand),
    __metadata("design:paramtypes", [create_books_service_1.CreateBooksService])
], CreateBooksCommandHandler);
exports.CreateBooksCommandHandler = CreateBooksCommandHandler;
//# sourceMappingURL=create-books.command-handler.js.map