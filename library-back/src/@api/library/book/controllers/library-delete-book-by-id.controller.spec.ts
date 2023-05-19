/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryDeleteBookByIdController } from './library-delete-book-by-id.controller';
import { LibraryDeleteBookByIdHandler } from '../handlers/library-delete-book-by-id.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryDeleteBookByIdController', () =>
{
    let controller: LibraryDeleteBookByIdController;
    let handler: LibraryDeleteBookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryDeleteBookByIdController,
            ],
            providers: [
                {
                    provide : LibraryDeleteBookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryDeleteBookByIdController>(LibraryDeleteBookByIdController);
        handler = module.get<LibraryDeleteBookByIdHandler>(LibraryDeleteBookByIdHandler);
    });

    describe('main', () =>
    {
        test('LibraryDeleteBookByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an book deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await controller.main(books[0].id)).toBe(books[0]);
        });
    });
});