/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryPaginateBooksController } from './library-paginate-books.controller';
import { LibraryPaginateBooksHandler } from '../handlers/library-paginate-books.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryPaginateBooksController', () =>
{
    let controller: LibraryPaginateBooksController;
    let handler: LibraryPaginateBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryPaginateBooksController,
            ],
            providers: [
                {
                    provide : LibraryPaginateBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryPaginateBooksController>(LibraryPaginateBooksController);
        handler = module.get<LibraryPaginateBooksHandler>(LibraryPaginateBooksHandler);
    });

    describe('main', () =>
    {
        test('LibraryPaginateBooksController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a books', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : books,
            })));
            expect(await controller.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : books,
            });
        });
    });
});