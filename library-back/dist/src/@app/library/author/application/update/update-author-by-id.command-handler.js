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
exports.UpdateAuthorByIdCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const update_author_by_id_command_1 = require("./update-author-by-id.command");
const update_author_by_id_service_1 = require("./update-author-by-id.service");
const value_objects_1 = require("../../domain/value-objects");
let UpdateAuthorByIdCommandHandler = class UpdateAuthorByIdCommandHandler {
    constructor(updateAuthorByIdService) {
        this.updateAuthorByIdService = updateAuthorByIdService;
    }
    async execute(command) {
        await this.updateAuthorByIdService.main({
            id: new value_objects_1.AuthorId(command.payload.id),
            name: new value_objects_1.AuthorName(command.payload.name, { undefinable: true }),
        }, command.constraint, command.cQMetadata);
    }
};
UpdateAuthorByIdCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_author_by_id_command_1.UpdateAuthorByIdCommand),
    __metadata("design:paramtypes", [update_author_by_id_service_1.UpdateAuthorByIdService])
], UpdateAuthorByIdCommandHandler);
exports.UpdateAuthorByIdCommandHandler = UpdateAuthorByIdCommandHandler;
//# sourceMappingURL=update-author-by-id.command-handler.js.map