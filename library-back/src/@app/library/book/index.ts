// commands
import { CreateBookCommandHandler } from './application/create/create-book.command-handler';
import { CreateBooksCommandHandler } from './application/create/create-books.command-handler';
import { UpdateBookByIdCommandHandler } from './application/update/update-book-by-id.command-handler';
import { UpdateBooksCommandHandler } from './application/update/update-books.command-handler';
import { UpsertBookCommandHandler } from './application/upsert/upsert-book.command-handler';
import { DeleteBookByIdCommandHandler } from './application/delete/delete-book-by-id.command-handler';
import { DeleteBooksCommandHandler } from './application/delete/delete-books.command-handler';

// queries
import { PaginateBooksQueryHandler } from './application/paginate/paginate-books.query-handler';
import { GetBooksQueryHandler } from './application/get/get-books.query-handler';
import { FindBookQueryHandler } from './application/find/find-book.query-handler';
import { FindBookByIdQueryHandler } from './application/find/find-book-by-id.query-handler';
import { RawSQLBooksQueryHandler } from './application/raw-sql/raw-sql-books.query-handler';

// events
import { CreatedBookEventHandler } from './application/events/created-book.event-handler';
import { CreatedBooksEventHandler } from './application/events/created-books.event-handler';
import { UpdatedBookEventHandler } from './application/events/updated-book.event-handler';
import { UpdatedBooksEventHandler } from './application/events/updated-books.event-handler';
import { DeletedBookEventHandler } from './application/events/deleted-book.event-handler';
import { DeletedBooksEventHandler } from './application/events/deleted-books.event-handler';

// services
import { CreateBookService } from './application/create/create-book.service';
import { CreateBooksService } from './application/create/create-books.service';
import { PaginateBooksService } from './application/paginate/paginate-books.service';
import { GetBooksService } from './application/get/get-books.service';
import { FindBookService } from './application/find/find-book.service';
import { FindBookByIdService } from './application/find/find-book-by-id.service';
import { RawSQLBooksService } from './application/raw-sql/raw-sql-books.service';
import { UpdateBookByIdService } from './application/update/update-book-by-id.service';
import { UpdateBooksService } from './application/update/update-books.service';
import { UpsertBookService } from './application/upsert/upsert-book.service';
import { DeleteBookByIdService } from './application/delete/delete-book-by-id.service';
import { DeleteBooksService } from './application/delete/delete-books.service';

// models
export { LibraryBookModel } from './infrastructure/sequelize/sequelize-book.model';

// repository
export { IBookRepository } from './domain/book.repository';
export { SequelizeBookRepository } from './infrastructure/sequelize/sequelize-book.repository';

// sagas
export { BookSagas } from './application/sagas/book.sagas';

export const LibraryBookHandlers = [
    // commands
    CreateBookCommandHandler,
    CreateBooksCommandHandler,
    UpdateBookByIdCommandHandler,
    UpdateBooksCommandHandler,
    UpsertBookCommandHandler,
    DeleteBookByIdCommandHandler,
    DeleteBooksCommandHandler,

    // queries
    PaginateBooksQueryHandler,
    GetBooksQueryHandler,
    FindBookQueryHandler,
    FindBookByIdQueryHandler,
    RawSQLBooksQueryHandler,

    // events
    CreatedBookEventHandler,
    CreatedBooksEventHandler,
    UpdatedBookEventHandler,
    UpdatedBooksEventHandler,
    DeletedBookEventHandler,
    DeletedBooksEventHandler,
];

export const LibraryBookServices = [
    CreateBookService,
    CreateBooksService,
    PaginateBooksService,
    GetBooksService,
    FindBookService,
    FindBookByIdService,
    RawSQLBooksService,
    UpdateBookByIdService,
    UpdateBooksService,
    UpsertBookService,
    DeleteBookByIdService,
    DeleteBooksService,
];