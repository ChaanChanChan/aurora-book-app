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
exports.LibraryBookSeeder = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
const create_books_command_1 = require("../../../../@app/library/book/application/create/create-books.command");
const mock_book_data_1 = require("../../../../@app/library/book/infrastructure/mock/mock-book.data");
let LibraryBookSeeder = class LibraryBookSeeder {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async main() {
        await this.commandBus.dispatch(new create_books_command_1.CreateBooksCommand(mock_book_data_1.books, {
            timezone: process.env.TZ,
        }));
        return true;
    }
};
LibraryBookSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.ICommandBus,
        core_1.IQueryBus])
], LibraryBookSeeder);
exports.LibraryBookSeeder = LibraryBookSeeder;
//# sourceMappingURL=library-book.seeder.js.map