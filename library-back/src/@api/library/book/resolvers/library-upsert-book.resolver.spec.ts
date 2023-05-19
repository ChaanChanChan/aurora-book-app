/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryUpsertBookResolver } from './library-upsert-book.resolver';
import { LibraryUpsertBookHandler } from '../handlers/library-upsert-book.handler';
import { LibraryUpdateBookByIdInput } from '@api/graphql';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryUpsertBookResolver', () =>
{
    let resolver: LibraryUpsertBookResolver;
    let handler: LibraryUpsertBookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryUpsertBookResolver,
                {
                    provide : LibraryUpsertBookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryUpsertBookResolver>(LibraryUpsertBookResolver);
        handler = module.get<LibraryUpsertBookHandler>(LibraryUpsertBookHandler);
    });

    test('LibraryUpsertBookResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryUpsertBookResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an book upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await resolver.main(<LibraryUpdateBookByIdInput>books[0])).toBe(books[0]);
        });
    });
});