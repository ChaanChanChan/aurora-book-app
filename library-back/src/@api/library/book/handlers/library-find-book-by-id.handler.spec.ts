/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// custom items
import { LibraryFindBookByIdHandler } from './library-find-book-by-id.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryFindBookByIdHandler', () =>
{
    let handler: LibraryFindBookByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryFindBookByIdHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<LibraryFindBookByIdHandler>(LibraryFindBookByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('LibraryFindBookByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryFindBookByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an book by id', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await handler.main(books[0].id)).toBe(books[0]);
        });
    });
});