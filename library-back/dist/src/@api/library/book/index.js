"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryBookServices = exports.LibraryBookApiHandlers = exports.LibraryBookResolvers = exports.LibraryBookControllers = void 0;
const library_create_book_controller_1 = require("./controllers/library-create-book.controller");
const library_create_books_controller_1 = require("./controllers/library-create-books.controller");
const library_paginate_books_controller_1 = require("./controllers/library-paginate-books.controller");
const library_get_books_controller_1 = require("./controllers/library-get-books.controller");
const library_find_book_by_id_controller_1 = require("./controllers/library-find-book-by-id.controller");
const library_find_book_controller_1 = require("./controllers/library-find-book.controller");
const library_update_book_by_id_controller_1 = require("./controllers/library-update-book-by-id.controller");
const library_update_books_controller_1 = require("./controllers/library-update-books.controller");
const library_upsert_book_controller_1 = require("./controllers/library-upsert-book.controller");
const library_delete_book_by_id_controller_1 = require("./controllers/library-delete-book-by-id.controller");
const library_delete_books_controller_1 = require("./controllers/library-delete-books.controller");
const library_create_book_resolver_1 = require("./resolvers/library-create-book.resolver");
const library_create_books_resolver_1 = require("./resolvers/library-create-books.resolver");
const library_paginate_books_resolver_1 = require("./resolvers/library-paginate-books.resolver");
const library_get_books_resolver_1 = require("./resolvers/library-get-books.resolver");
const library_find_book_by_id_resolver_1 = require("./resolvers/library-find-book-by-id.resolver");
const library_find_book_resolver_1 = require("./resolvers/library-find-book.resolver");
const library_update_book_by_id_resolver_1 = require("./resolvers/library-update-book-by-id.resolver");
const library_update_books_resolver_1 = require("./resolvers/library-update-books.resolver");
const library_upsert_book_resolver_1 = require("./resolvers/library-upsert-book.resolver");
const library_delete_book_by_id_resolver_1 = require("./resolvers/library-delete-book-by-id.resolver");
const library_delete_books_resolver_1 = require("./resolvers/library-delete-books.resolver");
const library_create_book_handler_1 = require("./handlers/library-create-book.handler");
const library_create_books_handler_1 = require("./handlers/library-create-books.handler");
const library_paginate_books_handler_1 = require("./handlers/library-paginate-books.handler");
const library_get_books_handler_1 = require("./handlers/library-get-books.handler");
const library_find_book_by_id_handler_1 = require("./handlers/library-find-book-by-id.handler");
const library_find_book_handler_1 = require("./handlers/library-find-book.handler");
const library_update_book_by_id_handler_1 = require("./handlers/library-update-book-by-id.handler");
const library_update_books_handler_1 = require("./handlers/library-update-books.handler");
const library_upsert_book_handler_1 = require("./handlers/library-upsert-book.handler");
const library_delete_book_by_id_handler_1 = require("./handlers/library-delete-book-by-id.handler");
const library_delete_books_handler_1 = require("./handlers/library-delete-books.handler");
const library_book_seeder_1 = require("./seeder/library-book.seeder");
exports.LibraryBookControllers = [
    library_create_book_controller_1.LibraryCreateBookController,
    library_create_books_controller_1.LibraryCreateBooksController,
    library_paginate_books_controller_1.LibraryPaginateBooksController,
    library_get_books_controller_1.LibraryGetBooksController,
    library_find_book_by_id_controller_1.LibraryFindBookByIdController,
    library_find_book_controller_1.LibraryFindBookController,
    library_update_book_by_id_controller_1.LibraryUpdateBookByIdController,
    library_update_books_controller_1.LibraryUpdateBooksController,
    library_upsert_book_controller_1.LibraryUpsertBookController,
    library_delete_book_by_id_controller_1.LibraryDeleteBookByIdController,
    library_delete_books_controller_1.LibraryDeleteBooksController,
];
exports.LibraryBookResolvers = [
    library_create_book_resolver_1.LibraryCreateBookResolver,
    library_create_books_resolver_1.LibraryCreateBooksResolver,
    library_paginate_books_resolver_1.LibraryPaginateBooksResolver,
    library_get_books_resolver_1.LibraryGetBooksResolver,
    library_find_book_by_id_resolver_1.LibraryFindBookByIdResolver,
    library_find_book_resolver_1.LibraryFindBookResolver,
    library_update_book_by_id_resolver_1.LibraryUpdateBookByIdResolver,
    library_update_books_resolver_1.LibraryUpdateBooksResolver,
    library_upsert_book_resolver_1.LibraryUpsertBookResolver,
    library_delete_book_by_id_resolver_1.LibraryDeleteBookByIdResolver,
    library_delete_books_resolver_1.LibraryDeleteBooksResolver,
];
exports.LibraryBookApiHandlers = [
    library_create_book_handler_1.LibraryCreateBookHandler,
    library_create_books_handler_1.LibraryCreateBooksHandler,
    library_paginate_books_handler_1.LibraryPaginateBooksHandler,
    library_get_books_handler_1.LibraryGetBooksHandler,
    library_find_book_by_id_handler_1.LibraryFindBookByIdHandler,
    library_find_book_handler_1.LibraryFindBookHandler,
    library_update_book_by_id_handler_1.LibraryUpdateBookByIdHandler,
    library_update_books_handler_1.LibraryUpdateBooksHandler,
    library_upsert_book_handler_1.LibraryUpsertBookHandler,
    library_delete_book_by_id_handler_1.LibraryDeleteBookByIdHandler,
    library_delete_books_handler_1.LibraryDeleteBooksHandler,
];
exports.LibraryBookServices = [
    library_book_seeder_1.LibraryBookSeeder,
];
//# sourceMappingURL=index.js.map