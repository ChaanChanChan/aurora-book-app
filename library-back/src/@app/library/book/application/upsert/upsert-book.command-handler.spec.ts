import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { UpsertBookCommandHandler } from './upsert-book.command-handler';
import { UpsertBookCommand } from './upsert-book.command';
import { UpsertBookService } from './upsert-book.service';

describe('UpsertBookCommandHandler', () =>
{
    let commandHandler: UpsertBookCommandHandler;
    let service: UpsertBookService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpsertBookCommandHandler,
                {
                    provide : UpsertBookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpsertBookCommandHandler>(UpsertBookCommandHandler);
        service = module.get<UpsertBookService>(UpsertBookService);
    });

    describe('main', () =>
    {
        test('UpsertBookCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the UpsertBookService', async () =>
        {
            expect(await commandHandler.execute(
                new UpsertBookCommand(
                    {
                        id: books[0].id,
                        title: books[0].title,
                        publishedAt: books[0].publishedAt,
                        price: books[0].price,
                        authorId: books[0].authorId,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});