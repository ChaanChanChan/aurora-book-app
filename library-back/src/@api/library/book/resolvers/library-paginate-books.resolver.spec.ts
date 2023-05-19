/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryPaginateBooksResolver } from './library-paginate-books.resolver';
import { LibraryPaginateBooksHandler } from '../handlers/library-paginate-books.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryPaginateBooksResolver', () =>
{
    let resolver: LibraryPaginateBooksResolver;
    let handler: LibraryPaginateBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryPaginateBooksResolver,
                {
                    provide : LibraryPaginateBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryPaginateBooksResolver>(LibraryPaginateBooksResolver);
        handler = module.get<LibraryPaginateBooksHandler>(LibraryPaginateBooksHandler);
    });

    test('LibraryPaginateBooksResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryPaginateBooksResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a books', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve({
                total: 5,
                count: 5,
                rows : books,
            })));
            expect(await resolver.main()).toStrictEqual({
                total: 5,
                count: 5,
                rows : books,
            });
        });
    });
});