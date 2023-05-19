/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryGetBooksController } from './library-get-books.controller';
import { LibraryGetBooksHandler } from '../handlers/library-get-books.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryGetBooksController', () =>
{
    let controller: LibraryGetBooksController;
    let handler: LibraryGetBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryGetBooksController,
            ],
            providers: [
                {
                    provide : LibraryGetBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryGetBooksController>(LibraryGetBooksController);
        handler = module.get<LibraryGetBooksHandler>(LibraryGetBooksHandler);
    });

    describe('main', () =>
    {
        test('LibraryGetBooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a books', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books)));
            expect(await controller.main()).toBe(books);
        });
    });
});