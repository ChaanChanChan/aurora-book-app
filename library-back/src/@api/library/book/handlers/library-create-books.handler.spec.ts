import { Test, TestingModule } from '@nestjs/testing';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// custom items
import { LibraryCreateBooksHandler } from './library-create-books.handler';
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryCreateBooksHandler', () =>
{
    let handler: LibraryCreateBooksHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LibraryCreateBooksHandler,
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

        handler = module.get<LibraryCreateBooksHandler>(LibraryCreateBooksHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('LibraryCreateBooksHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an books created', async () =>
        {
            expect(await handler.main(books)).toBe(true);
        });
    });
});