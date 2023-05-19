// controllers
import { LibraryCreateBookController } from './controllers/library-create-book.controller';
import { LibraryCreateBooksController } from './controllers/library-create-books.controller';
import { LibraryPaginateBooksController } from './controllers/library-paginate-books.controller';
import { LibraryGetBooksController } from './controllers/library-get-books.controller';
import { LibraryFindBookByIdController } from './controllers/library-find-book-by-id.controller';
import { LibraryFindBookController } from './controllers/library-find-book.controller';
import { LibraryUpdateBookByIdController } from './controllers/library-update-book-by-id.controller';
import { LibraryUpdateBooksController } from './controllers/library-update-books.controller';
import { LibraryUpsertBookController } from './controllers/library-upsert-book.controller';
import { LibraryDeleteBookByIdController } from './controllers/library-delete-book-by-id.controller';
import { LibraryDeleteBooksController } from './controllers/library-delete-books.controller';

// resolvers
import { LibraryCreateBookResolver } from './resolvers/library-create-book.resolver';
import { LibraryCreateBooksResolver } from './resolvers/library-create-books.resolver';
import { LibraryPaginateBooksResolver } from './resolvers/library-paginate-books.resolver';
import { LibraryGetBooksResolver } from './resolvers/library-get-books.resolver';
import { LibraryFindBookByIdResolver } from './resolvers/library-find-book-by-id.resolver';
import { LibraryFindBookResolver } from './resolvers/library-find-book.resolver';
import { LibraryUpdateBookByIdResolver } from './resolvers/library-update-book-by-id.resolver';
import { LibraryUpdateBooksResolver } from './resolvers/library-update-books.resolver';
import { LibraryUpsertBookResolver } from './resolvers/library-upsert-book.resolver';
import { LibraryDeleteBookByIdResolver } from './resolvers/library-delete-book-by-id.resolver';
import { LibraryDeleteBooksResolver } from './resolvers/library-delete-books.resolver';

// handlers
import { LibraryCreateBookHandler } from './handlers/library-create-book.handler';
import { LibraryCreateBooksHandler } from './handlers/library-create-books.handler';
import { LibraryPaginateBooksHandler } from './handlers/library-paginate-books.handler';
import { LibraryGetBooksHandler } from './handlers/library-get-books.handler';
import { LibraryFindBookByIdHandler } from './handlers/library-find-book-by-id.handler';
import { LibraryFindBookHandler } from './handlers/library-find-book.handler';
import { LibraryUpdateBookByIdHandler } from './handlers/library-update-book-by-id.handler';
import { LibraryUpdateBooksHandler } from './handlers/library-update-books.handler';
import { LibraryUpsertBookHandler } from './handlers/library-upsert-book.handler';
import { LibraryDeleteBookByIdHandler } from './handlers/library-delete-book-by-id.handler';
import { LibraryDeleteBooksHandler } from './handlers/library-delete-books.handler';

// seeder
import { LibraryBookSeeder } from './seeder/library-book.seeder';

export const LibraryBookControllers = [
    LibraryCreateBookController,
    LibraryCreateBooksController,
    LibraryPaginateBooksController,
    LibraryGetBooksController,
    LibraryFindBookByIdController,
    LibraryFindBookController,
    LibraryUpdateBookByIdController,
    LibraryUpdateBooksController,
    LibraryUpsertBookController,
    LibraryDeleteBookByIdController,
    LibraryDeleteBooksController,
];

export const LibraryBookResolvers = [
    LibraryCreateBookResolver,
    LibraryCreateBooksResolver,
    LibraryPaginateBooksResolver,
    LibraryGetBooksResolver,
    LibraryFindBookByIdResolver,
    LibraryFindBookResolver,
    LibraryUpdateBookByIdResolver,
    LibraryUpdateBooksResolver,
    LibraryUpsertBookResolver,
    LibraryDeleteBookByIdResolver,
    LibraryDeleteBooksResolver,
];

export const LibraryBookApiHandlers = [
    LibraryCreateBookHandler,
    LibraryCreateBooksHandler,
    LibraryPaginateBooksHandler,
    LibraryGetBooksHandler,
    LibraryFindBookByIdHandler,
    LibraryFindBookHandler,
    LibraryUpdateBookByIdHandler,
    LibraryUpdateBooksHandler,
    LibraryUpsertBookHandler,
    LibraryDeleteBookByIdHandler,
    LibraryDeleteBooksHandler,
];

export const LibraryBookServices = [
    LibraryBookSeeder,
];