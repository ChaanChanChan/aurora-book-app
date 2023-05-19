/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryGetBooksResolver } from './library-get-books.resolver';
import { LibraryGetBooksHandler } from '../handlers/library-get-books.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryGetBooksResolver', () =>
{
    let resolver: LibraryGetBooksResolver;
    let handler: LibraryGetBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryGetBooksResolver,
                {
                    provide : LibraryGetBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryGetBooksResolver>(LibraryGetBooksResolver);
        handler = module.get<LibraryGetBooksHandler>(LibraryGetBooksHandler);
    });

    test('LibraryGetBooksResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryGetBooksResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a books', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books)));
            expect(await resolver.main()).toBe(books);
        });
    });
});