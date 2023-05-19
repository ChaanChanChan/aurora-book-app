/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryDeleteBookByIdResolver } from './library-delete-book-by-id.resolver';
import { LibraryDeleteBookByIdHandler } from '../handlers/library-delete-book-by-id.handler';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryDeleteBookByIdResolver', () =>
{
    let resolver: LibraryDeleteBookByIdResolver;
    let handler: LibraryDeleteBookByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryDeleteBookByIdResolver,
                {
                    provide : LibraryDeleteBookByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryDeleteBookByIdResolver>(LibraryDeleteBookByIdResolver);
        handler = module.get<LibraryDeleteBookByIdHandler>(LibraryDeleteBookByIdHandler);
    });

    test('LibraryDeleteBookByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryDeleteBookByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an book deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await resolver.main(books[0].id)).toBe(books[0]);
        });
    });
});