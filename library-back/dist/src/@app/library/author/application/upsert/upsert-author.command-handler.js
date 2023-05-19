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
exports.UpsertAuthorCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const upsert_author_command_1 = require("./upsert-author.command");
const upsert_author_service_1 = require("./upsert-author.service");
const value_objects_1 = require("../../domain/value-objects");
let UpsertAuthorCommandHandler = class UpsertAuthorCommandHandler {
    constructor(upsertAuthorService) {
        this.upsertAuthorService = upsertAuthorService;
    }
    async execute(command) {
        await this.upsertAuthorService.main({
            id: new value_objects_1.AuthorId(command.payload.id),
            name: new value_objects_1.AuthorName(command.payload.name),
        }, command.cQMetadata);
    }
};
UpsertAuthorCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(upsert_author_command_1.UpsertAuthorCommand),
    __metadata("design:paramtypes", [upsert_author_service_1.UpsertAuthorService])
], UpsertAuthorCommandHandler);
exports.UpsertAuthorCommandHandler = UpsertAuthorCommandHandler;
//# sourceMappingURL=upsert-author.command-handler.js.map