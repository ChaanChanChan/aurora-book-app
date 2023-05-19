/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryFindBookController } from './library-find-book.controller';
import { LibraryFindBookHandler } from '../handlers/library-find-book.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryFindBookController', () =>
{
    let controller: LibraryFindBookController;
    let handler: LibraryFindBookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryFindBookController,
            ],
            providers: [
                {
                    provide : LibraryFindBookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryFindBookController>(LibraryFindBookController);
        handler = module.get<LibraryFindBookHandler>(LibraryFindBookHandler);
    });

    describe('main', () =>
    {
        test('LibraryFindBookController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a book', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await controller.main()).toBe(books[0]);
        });
    });
});