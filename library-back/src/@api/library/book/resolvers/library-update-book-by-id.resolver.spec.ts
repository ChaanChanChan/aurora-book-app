/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryUpdateBookByIdResolver } from './library-update-book-by-id.resolver';
import { LibraryUpdateBookByIdHandler } from '../handlers/library-update-book-by-id.handler';
import { LibraryUpdateBookByIdInput } from '@api/graphql';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryUpdateBookByIdResolver', () =>
{
    let resolver: LibraryUpdateBookByIdResolver;
    let handler: LibraryUpdateBookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryUpdateBookByIdResolver,
                {
                    provide : LibraryUpdateBookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryUpdateBookByIdResolver>(LibraryUpdateBookByIdResolver);
        handler = module.get<LibraryUpdateBookByIdHandler>(LibraryUpdateBookByIdHandler);
    });

    test('LibraryUpdateBookByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryUpdateBookByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a book by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await resolver.main(<LibraryUpdateBookByIdInput>books[0])).toBe(books[0]);
        });
    });
});