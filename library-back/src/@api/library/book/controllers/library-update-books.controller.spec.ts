/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryUpdateBooksController } from './library-update-books.controller';
import { LibraryUpdateBooksHandler } from '../handlers/library-update-books.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryUpdateBooksController', () =>
{
    let controller: LibraryUpdateBooksController;
    let handler: LibraryUpdateBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryUpdateBooksController,
            ],
            providers: [
                {
                    provide : LibraryUpdateBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryUpdateBooksController>(LibraryUpdateBooksController);
        handler = module.get<LibraryUpdateBooksHandler>(LibraryUpdateBooksHandler);
    });

    describe('main', () =>
    {
        test('LibraryUpdateBooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a books updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await controller.main(books[0])).toBe(books[0]);
        });
    });
});