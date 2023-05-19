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
exports.UpdateBookByIdCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_book_by_id_command_1 = require("./update-book-by-id.command");
const update_book_by_id_service_1 = require("./update-book-by-id.service");
const value_objects_1 = require("../../domain/value-objects");
let UpdateBookByIdCommandHandler = class UpdateBookByIdCommandHandler {
    constructor(updateBookByIdService) {
        this.updateBookByIdService = updateBookByIdService;
    }
    async execute(command) {
        await this.updateBookByIdService.main({
            id: new value_objects_1.BookId(command.payload.id),
            title: new value_objects_1.BookTitle(command.payload.title, { undefinable: true }),
            publishedAt: new value_objects_1.BookPublishedAt(command.payload.publishedAt, { undefinable: true }),
            price: new value_objects_1.BookPrice(command.payload.price, { undefinable: true }),
            authorId: new value_objects_1.BookAuthorId(command.payload.authorId, { undefinable: true }),
        }, command.constraint, command.cQMetadata);
    }
};
UpdateBookByIdCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_book_by_id_command_1.UpdateBookByIdCommand),
    __metadata("design:paramtypes", [update_book_by_id_service_1.UpdateBookByIdService])
], UpdateBookByIdCommandHandler);
exports.UpdateBookByIdCommandHandler = UpdateBookByIdCommandHandler;
//# sourceMappingURL=update-book-by-id.command-handler.js.map