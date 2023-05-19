/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { CreateBooksCommandHandler } from './create-books.command-handler';
import { CreateBooksCommand } from './create-books.command';
import { CreateBooksService } from './create-books.service';

describe('CreateBooksCommandHandler', () =>
{
    let commandHandler: CreateBooksCommandHandler;
    let service: CreateBooksService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CreateBooksCommandHandler,
                {
                    provide : CreateBooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<CreateBooksCommandHandler>(CreateBooksCommandHandler);
        service = module.get<CreateBooksService>(CreateBooksService);
    });

    describe('main', () =>
    {
        test('CreateBooksCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return books createds', async () =>
        {
            expect(await commandHandler.execute(
                new CreateBooksCommand(
                    books,
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});