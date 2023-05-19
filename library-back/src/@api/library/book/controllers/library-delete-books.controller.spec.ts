/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryDeleteBooksController } from './library-delete-books.controller';
import { LibraryDeleteBooksHandler } from '../handlers/library-delete-books.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryDeleteBooksController', () =>
{
    let controller: LibraryDeleteBooksController;
    let handler: LibraryDeleteBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryDeleteBooksController,
            ],
            providers: [
                {
                    provide : LibraryDeleteBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryDeleteBooksController>(LibraryDeleteBooksController);
        handler = module.get<LibraryDeleteBooksHandler>(LibraryDeleteBooksHandler);
    });

    describe('main', () =>
    {
        test('LibraryDeleteBooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an books deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books)));
            expect(await controller.main()).toBe(books);
        });
    });
});