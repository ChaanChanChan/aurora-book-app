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
exports.UpdateAuthorsCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_authors_command_1 = require("./update-authors.command");
const update_authors_service_1 = require("./update-authors.service");
const value_objects_1 = require("../../domain/value-objects");
let UpdateAuthorsCommandHandler = class UpdateAuthorsCommandHandler {
    constructor(updateAuthorsService) {
        this.updateAuthorsService = updateAuthorsService;
    }
    async execute(command) {
        await this.updateAuthorsService.main({
            id: new value_objects_1.AuthorId(command.payload.id, { undefinable: true }),
            name: new value_objects_1.AuthorName(command.payload.name, { undefinable: true }),
        }, command.queryStatement, command.constraint, command.cQMetadata);
    }
};
UpdateAuthorsCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_authors_command_1.UpdateAuthorsCommand),
    __metadata("design:paramtypes", [update_authors_service_1.UpdateAuthorsService])
], UpdateAuthorsCommandHandler);
exports.UpdateAuthorsCommandHandler = UpdateAuthorsCommandHandler;
//# sourceMappingURL=update-authors.command-handler.js.map