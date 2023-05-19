/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryDeleteBooksResolver } from './library-delete-books.resolver';
import { LibraryDeleteBooksHandler } from '../handlers/library-delete-books.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryDeleteBooksResolver', () =>
{
    let resolver: LibraryDeleteBooksResolver;
    let handler: LibraryDeleteBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryDeleteBooksResolver,
                {
                    provide : LibraryDeleteBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryDeleteBooksResolver>(LibraryDeleteBooksResolver);
        handler = module.get<LibraryDeleteBooksHandler>(LibraryDeleteBooksHandler);
    });

    test('LibraryDeleteBooksResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryDeleteBooksResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an books deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books)));
            expect(await resolver.main()).toBe(books);
        });
    });
});