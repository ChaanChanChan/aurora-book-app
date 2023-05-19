/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryUpdateBookByIdController } from './library-update-book-by-id.controller';
import { LibraryUpdateBookByIdHandler } from '../handlers/library-update-book-by-id.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryUpdateBookByIdController', () =>
{
    let controller: LibraryUpdateBookByIdController;
    let handler: LibraryUpdateBookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryUpdateBookByIdController,
            ],
            providers: [
                {
                    provide : LibraryUpdateBookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryUpdateBookByIdController>(LibraryUpdateBookByIdController);
        handler = module.get<LibraryUpdateBookByIdHandler>(LibraryUpdateBookByIdHandler);
    });

    describe('main', () =>
    {
        test('LibraryUpdateBookByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a book updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await controller.main(books[0])).toBe(books[0]);
        });
    });
});