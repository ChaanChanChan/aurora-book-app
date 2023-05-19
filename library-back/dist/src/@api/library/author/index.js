"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryAuthorServices = exports.LibraryAuthorApiHandlers = exports.LibraryAuthorResolvers = exports.LibraryAuthorControllers = void 0;
const library_create_author_controller_1 = require("./controllers/library-create-author.controller");
const library_create_authors_controller_1 = require("./controllers/library-create-authors.controller");
const library_paginate_authors_controller_1 = require("./controllers/library-paginate-authors.controller");
const library_get_authors_controller_1 = require("./controllers/library-get-authors.controller");
const library_find_author_by_id_controller_1 = require("./controllers/library-find-author-by-id.controller");
const library_find_author_controller_1 = require("./controllers/library-find-author.controller");
const library_update_author_by_id_controller_1 = require("./controllers/library-update-author-by-id.controller");
const library_update_authors_controller_1 = require("./controllers/library-update-authors.controller");
const library_upsert_author_controller_1 = require("./controllers/library-upsert-author.controller");
const library_delete_author_by_id_controller_1 = require("./controllers/library-delete-author-by-id.controller");
const library_delete_authors_controller_1 = require("./controllers/library-delete-authors.controller");
const library_create_author_resolver_1 = require("./resolvers/library-create-author.resolver");
const library_create_authors_resolver_1 = require("./resolvers/library-create-authors.resolver");
const library_paginate_authors_resolver_1 = require("./resolvers/library-paginate-authors.resolver");
const library_get_authors_resolver_1 = require("./resolvers/library-get-authors.resolver");
const library_find_author_by_id_resolver_1 = require("./resolvers/library-find-author-by-id.resolver");
const library_find_author_resolver_1 = require("./resolvers/library-find-author.resolver");
const library_update_author_by_id_resolver_1 = require("./resolvers/library-update-author-by-id.resolver");
const library_update_authors_resolver_1 = require("./resolvers/library-update-authors.resolver");
const library_upsert_author_resolver_1 = require("./resolvers/library-upsert-author.resolver");
const library_delete_author_by_id_resolver_1 = require("./resolvers/library-delete-author-by-id.resolver");
const library_delete_authors_resolver_1 = require("./resolvers/library-delete-authors.resolver");
const library_create_author_handler_1 = require("./handlers/library-create-author.handler");
const library_create_authors_handler_1 = require("./handlers/library-create-authors.handler");
const library_paginate_authors_handler_1 = require("./handlers/library-paginate-authors.handler");
const library_get_authors_handler_1 = require("./handlers/library-get-authors.handler");
const library_find_author_by_id_handler_1 = require("./handlers/library-find-author-by-id.handler");
const library_find_author_handler_1 = require("./handlers/library-find-author.handler");
const library_update_author_by_id_handler_1 = require("./handlers/library-update-author-by-id.handler");
const library_update_authors_handler_1 = require("./handlers/library-update-authors.handler");
const library_upsert_author_handler_1 = require("./handlers/library-upsert-author.handler");
const library_delete_author_by_id_handler_1 = require("./handlers/library-delete-author-by-id.handler");
const library_delete_authors_handler_1 = require("./handlers/library-delete-authors.handler");
const library_author_seeder_1 = require("./seeder/library-author.seeder");
exports.LibraryAuthorControllers = [
    library_create_author_controller_1.LibraryCreateAuthorController,
    library_create_authors_controller_1.LibraryCreateAuthorsController,
    library_paginate_authors_controller_1.LibraryPaginateAuthorsController,
    library_get_authors_controller_1.LibraryGetAuthorsController,
    library_find_author_by_id_controller_1.LibraryFindAuthorByIdController,
    library_find_author_controller_1.LibraryFindAuthorController,
    library_update_author_by_id_controller_1.LibraryUpdateAuthorByIdController,
    library_update_authors_controller_1.LibraryUpdateAuthorsController,
    library_upsert_author_controller_1.LibraryUpsertAuthorController,
    library_delete_author_by_id_controller_1.LibraryDeleteAuthorByIdController,
    library_delete_authors_controller_1.LibraryDeleteAuthorsController,
];
exports.LibraryAuthorResolvers = [
    library_create_author_resolver_1.LibraryCreateAuthorResolver,
    library_create_authors_resolver_1.LibraryCreateAuthorsResolver,
    library_paginate_authors_resolver_1.LibraryPaginateAuthorsResolver,
    library_get_authors_resolver_1.LibraryGetAuthorsResolver,
    library_find_author_by_id_resolver_1.LibraryFindAuthorByIdResolver,
    library_find_author_resolver_1.LibraryFindAuthorResolver,
    library_update_author_by_id_resolver_1.LibraryUpdateAuthorByIdResolver,
    library_update_authors_resolver_1.LibraryUpdateAuthorsResolver,
    library_upsert_author_resolver_1.LibraryUpsertAuthorResolver,
    library_delete_author_by_id_resolver_1.LibraryDeleteAuthorByIdResolver,
    library_delete_authors_resolver_1.LibraryDeleteAuthorsResolver,
];
exports.LibraryAuthorApiHandlers = [
    library_create_author_handler_1.LibraryCreateAuthorHandler,
    library_create_authors_handler_1.LibraryCreateAuthorsHandler,
    library_paginate_authors_handler_1.LibraryPaginateAuthorsHandler,
    library_get_authors_handler_1.LibraryGetAuthorsHandler,
    library_find_author_by_id_handler_1.LibraryFindAuthorByIdHandler,
    library_find_author_handler_1.LibraryFindAuthorHandler,
    library_update_author_by_id_handler_1.LibraryUpdateAuthorByIdHandler,
    library_update_authors_handler_1.LibraryUpdateAuthorsHandler,
    library_upsert_author_handler_1.LibraryUpsertAuthorHandler,
    library_delete_author_by_id_handler_1.LibraryDeleteAuthorByIdHandler,
    library_delete_authors_handler_1.LibraryDeleteAuthorsHandler,
];
exports.LibraryAuthorServices = [
    library_author_seeder_1.LibraryAuthorSeeder,
];
//# sourceMappingURL=index.js.map