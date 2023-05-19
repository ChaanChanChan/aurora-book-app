import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { DeleteBooksCommandHandler } from './delete-books.command-handler';
import { DeleteBooksCommand } from './delete-books.command';
import { DeleteBooksService } from './delete-books.service';

describe('DeleteBooksCommandHandler', () =>
{
    let commandHandler: DeleteBooksCommandHandler;
    let service: DeleteBooksService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteBooksCommandHandler,
                {
                    provide : DeleteBooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<DeleteBooksCommandHandler>(DeleteBooksCommandHandler);
        service = module.get<DeleteBooksService>(DeleteBooksService);
    });

    describe('main', () =>
    {
        test('DeleteBooksCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return void', async () =>
        {
            expect(await commandHandler.execute(
                new DeleteBooksCommand(),
            )).toBe(undefined);
        });
    });
});