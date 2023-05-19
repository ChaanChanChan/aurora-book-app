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
exports.LibraryCreateAuthorHandler = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
const find_author_by_id_query_1 = require("../../../../@app/library/author/application/find/find-author-by-id.query");
const create_author_command_1 = require("../../../../@app/library/author/application/create/create-author.command");
let LibraryCreateAuthorHandler = class LibraryCreateAuthorHandler {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async main(payload, timezone) {
        await this.commandBus.dispatch(new create_author_command_1.CreateAuthorCommand(payload, {
            timezone,
        }));
        return await this.queryBus.ask(new find_author_by_id_query_1.FindAuthorByIdQuery(payload.id, {}, {
            timezone,
        }));
    }
};
LibraryCreateAuthorHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ICommandBus,
        core_1.IQueryBus])
], LibraryCreateAuthorHandler);
exports.LibraryCreateAuthorHandler = LibraryCreateAuthorHandler;
//# sourceMappingURL=library-create-author.handler.js.map