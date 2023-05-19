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
exports.DeleteBooksCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const delete_books_command_1 = require("./delete-books.command");
const delete_books_service_1 = require("./delete-books.service");
let DeleteBooksCommandHandler = class DeleteBooksCommandHandler {
    constructor(deleteBooksService) {
        this.deleteBooksService = deleteBooksService;
    }
    async execute(command) {
        await this.deleteBooksService.main(command.queryStatement, command.constraint, command.cQMetadata);
    }
};
DeleteBooksCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_books_command_1.DeleteBooksCommand),
    __metadata("design:paramtypes", [delete_books_service_1.DeleteBooksService])
], DeleteBooksCommandHandler);
exports.DeleteBooksCommandHandler = DeleteBooksCommandHandler;
//# sourceMappingURL=delete-books.command-handler.js.map