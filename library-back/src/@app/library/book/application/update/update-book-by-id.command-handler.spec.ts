import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { UpdateBookByIdCommandHandler } from './update-book-by-id.command-handler';
import { UpdateBookByIdCommand } from './update-book-by-id.command';
import { UpdateBookByIdService } from './update-book-by-id.service';

describe('UpdateBookByIdCommandHandler', () =>
{
    let commandHandler: UpdateBookByIdCommandHandler;
    let service: UpdateBookByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UpdateBookByIdCommandHandler,
                {
                    provide : UpdateBookByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<UpdateBookByIdCommandHandler>(UpdateBookByIdCommandHandler);
        service = module.get<UpdateBookByIdService>(UpdateBookByIdService);
    });

    describe('main', () =>
    {
        test('UpdateBookByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an book created', async () =>
        {
            expect(await commandHandler.execute(
                new UpdateBookByIdCommand(
                    {
                        id: books[0].id,
                        title: books[0].title,
                        publishedAt: books[0].publishedAt,
                        price: books[0].price,
                        authorId: books[0].authorId,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});