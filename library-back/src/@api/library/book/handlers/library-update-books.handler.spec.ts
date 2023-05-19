/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// custom items
import { LibraryUpdateBooksHandler } from './library-update-books.handler';
import { LibraryUpdateBooksInput } from '@api/graphql';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryUpdateBooksHandler', () =>
{
    let handler: LibraryUpdateBooksHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryUpdateBooksHandler,
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

        handler = module.get<LibraryUpdateBooksHandler>(LibraryUpdateBooksHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('LibraryUpdateBooksHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryUpdateBooksHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a books updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await handler.main(<LibraryUpdateBooksInput>books[0])).toBe(books[0]);
        });
    });
});