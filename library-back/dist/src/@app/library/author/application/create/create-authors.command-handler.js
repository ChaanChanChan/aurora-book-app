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
exports.CreateAuthorsCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const create_authors_command_1 = require("./create-authors.command");
const create_authors_service_1 = require("./create-authors.service");
const value_objects_1 = require("../../domain/value-objects");
let CreateAuthorsCommandHandler = class CreateAuthorsCommandHandler {
    constructor(createAuthorsService) {
        this.createAuthorsService = createAuthorsService;
    }
    async execute(command) {
        await this.createAuthorsService.main(command.payload
            .map(author => {
            return {
                id: new value_objects_1.AuthorId(author.id),
                name: new value_objects_1.AuthorName(author.name),
            };
        }), command.cQMetadata);
    }
};
CreateAuthorsCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_authors_command_1.CreateAuthorsCommand),
    __metadata("design:paramtypes", [create_authors_service_1.CreateAuthorsService])
], CreateAuthorsCommandHandler);
exports.CreateAuthorsCommandHandler = CreateAuthorsCommandHandler;
//# sourceMappingURL=create-authors.command-handler.js.map