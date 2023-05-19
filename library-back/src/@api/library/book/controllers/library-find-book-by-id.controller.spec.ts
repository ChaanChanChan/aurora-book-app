/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryFindBookByIdController } from './library-find-book-by-id.controller';
import { LibraryFindBookByIdHandler } from '../handlers/library-find-book-by-id.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryFindBookByIdController', () =>
{
    let controller: LibraryFindBookByIdController;
    let handler: LibraryFindBookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryFindBookByIdController,
            ],
            providers: [
                {
                    provide : LibraryFindBookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryFindBookByIdController>(LibraryFindBookByIdController);
        handler = module.get<LibraryFindBookByIdHandler>(LibraryFindBookByIdHandler);
    });

    describe('main', () =>
    {
        test('LibraryFindBookByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an book by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await controller.main(books[0].id)).toBe(books[0]);
        });
    });
});