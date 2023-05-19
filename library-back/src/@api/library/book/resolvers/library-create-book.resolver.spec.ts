/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { LibraryCreateBookResolver } from './library-create-book.resolver';
import { LibraryCreateBookHandler } from '../handlers/library-create-book.handler';
import { LibraryCreateBookInput } from '@api/graphql';

// sources
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

describe('LibraryCreateBookResolver', () =>
{
    let resolver: LibraryCreateBookResolver;
    let handler: LibraryCreateBookHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                LibraryCreateBookResolver,
                {
                    provide : LibraryCreateBookHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<LibraryCreateBookResolver>(LibraryCreateBookResolver);
        handler = module.get<LibraryCreateBookHandler>(LibraryCreateBookHandler);
    });

    test('LibraryCreateBookResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('LibraryCreateBookResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an book created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(books[0])));
            expect(await resolver.main(<LibraryCreateBookInput>books[0])).toBe(books[0]);
        });
    });
});