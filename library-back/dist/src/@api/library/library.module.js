"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const shared_module_1 = require("../../@aurora/shared.module");
const library_seeder_1 = require("./library.seeder");
const library_1 = require("../../@app/library");
const author_1 = require("./author");
const book_1 = require("./book");
let LibraryModule = class LibraryModule {
};
LibraryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_module_1.SharedModule,
            sequelize_1.SequelizeModule.forFeature([
                ...library_1.LibraryModels
            ])
        ],
        controllers: [
            ...author_1.LibraryAuthorControllers,
            ...book_1.LibraryBookControllers
        ],
        providers: [
            library_seeder_1.LibrarySeeder,
            ...library_1.LibraryHandlers,
            ...library_1.LibraryServices,
            ...library_1.LibraryRepositories,
            ...library_1.LibrarySagas,
            ...author_1.LibraryAuthorResolvers,
            ...author_1.LibraryAuthorApiHandlers,
            ...author_1.LibraryAuthorServices,
            ...book_1.LibraryBookResolvers,
            ...book_1.LibraryBookApiHandlers,
            ...book_1.LibraryBookServices
        ],
    })
], LibraryModule);
exports.LibraryModule = LibraryModule;
//# sourceMappingURL=library.module.js.map