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
exports.UpdateBooksCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_books_command_1 = require("./update-books.command");
const update_books_service_1 = require("./update-books.service");
const value_objects_1 = require("../../domain/value-objects");
let UpdateBooksCommandHandler = class UpdateBooksCommandHandler {
    constructor(updateBooksService) {
        this.updateBooksService = updateBooksService;
    }
    async execute(command) {
        await this.updateBooksService.main({
            id: new value_objects_1.BookId(command.payload.id, { undefinable: true }),
            title: new value_objects_1.BookTitle(command.payload.title, { undefinable: true }),
            publishedAt: new value_objects_1.BookPublishedAt(command.payload.publishedAt, { undefinable: true }),
            price: new value_objects_1.BookPrice(command.payload.price, { undefinable: true }),
            authorId: new value_objects_1.BookAuthorId(command.payload.authorId, { undefinable: true }),
        }, command.queryStatement, command.constraint, command.cQMetadata);
    }
};
UpdateBooksCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_books_command_1.UpdateBooksCommand),
    __metadata("design:paramtypes", [update_books_service_1.UpdateBooksService])
], UpdateBooksCommandHandler);
exports.UpdateBooksCommandHandler = UpdateBooksCommandHandler;
//# sourceMappingURL=update-books.command-handler.js.map