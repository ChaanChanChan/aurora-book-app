/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryCreateBookController } from './library-create-book.controller';
import { LibraryCreateBookHandler } from '../handlers/library-create-book.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryCreateBookController', () =>
{
    let controller: LibraryCreateBookController;
    let handler: LibraryCreateBookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                LibraryCreateBookController,
            ],
            providers: [
                {
                    provide : LibraryCreateBookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<LibraryCreateBookController>(LibraryCreateBookController);
        handler = module.get<LibraryCreateBookHandler>(LibraryCreateBookHandler);
    });

    describe('main', () =>
    {
        test('LibraryCreateBookController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an book created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await controller.main(books[0])).toBe(books[0]);
        });
    });
});