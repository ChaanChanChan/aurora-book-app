/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryUpdateBooksResolver } from './library-update-books.resolver';
import { LibraryUpdateBooksHandler } from '../handlers/library-update-books.handler';
import { LibraryUpdateBooksInput } from '@api/graphql';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryUpdateBooksResolver', () =>
{
    let resolver: LibraryUpdateBooksResolver;
    let handler: LibraryUpdateBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryUpdateBooksResolver,
                {
                    provide : LibraryUpdateBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryUpdateBooksResolver>(LibraryUpdateBooksResolver);
        handler = module.get<LibraryUpdateBooksHandler>(LibraryUpdateBooksHandler);
    });

    test('LibraryUpdateBooksResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryUpdateBooksResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a books updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await resolver.main(<LibraryUpdateBooksInput>books[0])).toBe(books[0]);
        });
    });
});