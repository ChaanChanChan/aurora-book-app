import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryCreateBooksController } from './library-create-books.controller';
import { LibraryCreateBooksHandler } from '../handlers/library-create-books.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryCreateBooksController', () =>
{
    let controller: LibraryCreateBooksController;
    let handler: LibraryCreateBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [
                LibraryCreateBooksController,
            ],
            providers: [
                {
                    provide : LibraryCreateBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryCreateBooksController>(LibraryCreateBooksController);
        handler = module.get<LibraryCreateBooksHandler>(LibraryCreateBooksHandler);
    });

    describe('main', () =>
    {
        test('LibraryCreateBooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an books created', async () =>
        {
            expect(await controller.main(books)).toBe(undefined);
        });
    });
});