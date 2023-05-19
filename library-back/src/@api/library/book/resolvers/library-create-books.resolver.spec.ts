import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryCreateBooksResolver } from './library-create-books.resolver';
import { LibraryCreateBooksHandler } from '../handlers/library-create-books.handler';
import { LibraryCreateBookInput } from '@api/graphql';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryCreateBooksResolver', () =>
{
    let resolver: LibraryCreateBooksResolver;
    let handler: LibraryCreateBooksHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LibraryCreateBooksResolver,
                {
                    provide : LibraryCreateBooksHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryCreateBooksResolver>(LibraryCreateBooksResolver);
        handler = module.get<LibraryCreateBooksHandler>(LibraryCreateBooksHandler);
    });

    test('LibraryCreateBooksResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryCreateBooksResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an books created', async () =>
        {
            expect(await resolver.main(<LibraryCreateBookInput[]>books)).toBe(undefined);
        });
    });
});