import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { CreateBookCommandHandler } from './create-book.command-handler';
import { CreateBookCommand } from './create-book.command';
import { CreateBookService } from './create-book.service';

describe('CreateBookCommandHandler', () =>
{
    let commandHandler: CreateBookCommandHandler;
    let service: CreateBookService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateBookCommandHandler,
                {
                    provide : CreateBookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CreateBookCommandHandler>(CreateBookCommandHandler);
        service = module.get<CreateBookService>(CreateBookService);
    });

    describe('main', () =>
    {
        test('CreateBookCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the CreateBookService', async () =>
        {
            expect(await commandHandler.execute(
                new CreateBookCommand(
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