import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { UpdateBooksCommandHandler } from './update-books.command-handler';
import { UpdateBooksCommand } from './update-books.command';
import { UpdateBooksService } from './update-books.service';

describe('UpdateBooksCommandHandler', () =>
{
    let commandHandler: UpdateBooksCommandHandler;
    let service: UpdateBooksService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateBooksCommandHandler,
                {
                    provide : UpdateBooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpdateBooksCommandHandler>(UpdateBooksCommandHandler);
        service = module.get<UpdateBooksService>(UpdateBooksService);
    });

    describe('main', () =>
    {
        test('UpdateBooksCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an books updated', async () =>
        {
            expect(await commandHandler.execute(
                new UpdateBooksCommand(
                    {
                        id: books[0].id,
                        title: books[0].title,
                        publishedAt: books[0].publishedAt,
                        price: books[0].price,
                        authorId: books[0].authorId,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});