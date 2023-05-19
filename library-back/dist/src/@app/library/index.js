"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibrarySagas = exports.LibraryRepositories = exports.LibraryModels = exports.LibraryServices = exports.LibraryHandlers = void 0;
const author_1 = require("./author");
const book_1 = require("./book");
exports.LibraryHandlers = [
    ...author_1.LibraryAuthorHandlers,
    ...book_1.LibraryBookHandlers
];
exports.LibraryServices = [
    ...author_1.LibraryAuthorServices,
    ...book_1.LibraryBookServices
];
exports.LibraryModels = [
    author_1.LibraryAuthorModel,
    book_1.LibraryBookModel
];
exports.LibraryRepositories = [
    {
        provide: author_1.IAuthorRepository,
        useClass: author_1.SequelizeAuthorRepository
    },
    {
        provide: book_1.IBookRepository,
        useClass: book_1.SequelizeBookRepository
    }
];
exports.LibrarySagas = [
    author_1.AuthorSagas,
    book_1.BookSagas
];
//# sourceMappingURL=index.js.map