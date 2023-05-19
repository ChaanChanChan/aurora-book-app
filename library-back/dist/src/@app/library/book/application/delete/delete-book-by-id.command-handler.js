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
exports.DeleteBookByIdCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const delete_book_by_id_command_1 = require("./delete-book-by-id.command");
const delete_book_by_id_service_1 = require("./delete-book-by-id.service");
const value_objects_1 = require("../../domain/value-objects");
let DeleteBookByIdCommandHandler = class DeleteBookByIdCommandHandler {
    constructor(deleteBookByIdService) {
        this.deleteBookByIdService = deleteBookByIdService;
    }
    async execute(command) {
        await this.deleteBookByIdService.main(new value_objects_1.BookId(command.id), command.constraint, command.cQMetadata);
    }
};
DeleteBookByIdCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_book_by_id_command_1.DeleteBookByIdCommand),
    __metadata("design:paramtypes", [delete_book_by_id_service_1.DeleteBookByIdService])
], DeleteBookByIdCommandHandler);
exports.DeleteBookByIdCommandHandler = DeleteBookByIdCommandHandler;
//# sourceMappingURL=delete-book-by-id.command-handler.js.map