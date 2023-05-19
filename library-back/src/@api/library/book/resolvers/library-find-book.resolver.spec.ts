/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryFindBookResolver } from './library-find-book.resolver';
import { LibraryFindBookHandler } from '../handlers/library-find-book.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryFindBookResolver', () =>
{
    let resolver: LibraryFindBookResolver;
    let handler: LibraryFindBookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryFindBookResolver,
                {
                    provide : LibraryFindBookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryFindBookResolver>(LibraryFindBookResolver);
        handler = module.get<LibraryFindBookHandler>(LibraryFindBookHandler);
    });

    test('LibraryFindBookResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryFindBookResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a book', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await resolver.main()).toBe(books[0]);
        });
    });
});