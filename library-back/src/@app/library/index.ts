import { LibraryAuthorHandlers, LibraryAuthorServices, LibraryAuthorModel, IAuthorRepository, SequelizeAuthorRepository, AuthorSagas } from './author';
import { LibraryBookHandlers, LibraryBookServices, LibraryBookModel, IBookRepository, SequelizeBookRepository, BookSagas } from './book';

export const LibraryHandlers = [
    ...LibraryAuthorHandlers,
    ...LibraryBookHandlers
];
export const LibraryServices = [
    ...LibraryAuthorServices,
    ...LibraryBookServices
];
export const LibraryModels = [
    LibraryAuthorModel,
    LibraryBookModel
];
export const LibraryRepositories = [
    {
        provide : IAuthorRepository,
        useClass: SequelizeAuthorRepository
    },
    {
        provide : IBookRepository,
        useClass: SequelizeBookRepository
    }
];
export const LibrarySagas = [
    AuthorSagas,
    BookSagas
];
