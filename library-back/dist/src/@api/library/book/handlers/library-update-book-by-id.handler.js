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
exports.LibraryUpdateBookByIdHandler = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
const find_book_by_id_query_1 = require("../../../../@app/library/book/application/find/find-book-by-id.query");
const update_book_by_id_command_1 = require("../../../../@app/library/book/application/update/update-book-by-id.command");
let LibraryUpdateBookByIdHandler = class LibraryUpdateBookByIdHandler {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async main(payload, constraint, timezone) {
        const book = await this.queryBus.ask(new find_book_by_id_query_1.FindBookByIdQuery(payload.id, constraint, {
            timezone,
        }));
        const dataToUpdate = core_1.Utils.diff(payload, book);
        await this.commandBus.dispatch(new update_book_by_id_command_1.UpdateBookByIdCommand(Object.assign(Object.assign({}, dataToUpdate), { id: payload.id }), constraint, {
            timezone,
        }));
        return await this.queryBus.ask(new find_book_by_id_query_1.FindBookByIdQuery(payload.id, constraint, {
            timezone,
        }));
    }
};
LibraryUpdateBookByIdHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ICommandBus,
        core_1.IQueryBus])
], LibraryUpdateBookByIdHandler);
exports.LibraryUpdateBookByIdHandler = LibraryUpdateBookByIdHandler;
//# sourceMappingURL=library-update-book-by-id.handler.js.map