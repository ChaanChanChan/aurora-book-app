/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryFindBookByIdResolver } from './library-find-book-by-id.resolver';
import { LibraryFindBookByIdHandler } from '../handlers/library-find-book-by-id.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryFindBookByIdResolver', () =>
{
    let resolver: LibraryFindBookByIdResolver;
    let handler: LibraryFindBookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryFindBookByIdResolver,
                {
                    provide : LibraryFindBookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryFindBookByIdResolver>(LibraryFindBookByIdResolver);
        handler = module.get<LibraryFindBookByIdHandler>(LibraryFindBookByIdHandler);
    });

    test('LibraryFindBookByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryFindBookByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an book by id', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await resolver.main(books[0].id)).toBe(books[0]);
        });
    });
});