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
exports.CreateBookCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_book_command_1 = require("./create-book.command");
const create_book_service_1 = require("./create-book.service");
const value_objects_1 = require("../../domain/value-objects");
let CreateBookCommandHandler = class CreateBookCommandHandler {
    constructor(createBookService) {
        this.createBookService = createBookService;
    }
    async execute(command) {
        await this.createBookService.main({
            id: new value_objects_1.BookId(command.payload.id),
            title: new value_objects_1.BookTitle(command.payload.title),
            publishedAt: new value_objects_1.BookPublishedAt(command.payload.publishedAt),
            price: new value_objects_1.BookPrice(command.payload.price),
            authorId: new value_objects_1.BookAuthorId(command.payload.authorId),
        }, command.cQMetadata);
    }
};
CreateBookCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_book_command_1.CreateBookCommand),
    __metadata("design:paramtypes", [create_book_service_1.CreateBookService])
], CreateBookCommandHandler);
exports.CreateBookCommandHandler = CreateBookCommandHandler;
//# sourceMappingURL=create-book.command-handler.js.map