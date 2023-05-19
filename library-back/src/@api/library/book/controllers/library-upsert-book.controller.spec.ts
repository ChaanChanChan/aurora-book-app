/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryUpsertBookController } from './library-upsert-book.controller';
import { LibraryUpsertBookHandler } from '../handlers/library-upsert-book.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryUpsertBookController', () =>
{
    let controller: LibraryUpsertBookController;
    let handler: LibraryUpsertBookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryUpsertBookController,
            ],
            providers: [
                {
                    provide : LibraryUpsertBookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryUpsertBookController>(LibraryUpsertBookController);
        handler = module.get<LibraryUpsertBookHandler>(LibraryUpsertBookHandler);
    });

    describe('main', () =>
    {
        test('LibraryUpsertBookController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an book upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await controller.main(books[0])).toBe(books[0]);
        });
    });
});