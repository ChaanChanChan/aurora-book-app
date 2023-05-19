import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { DeleteBookByIdCommandHandler } from './delete-book-by-id.command-handler';
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { DeleteBookByIdCommand } from './delete-book-by-id.command';
import { DeleteBookByIdService } from './delete-book-by-id.service';

describe('DeleteBookByIdCommandHandler', () =>
{
    let commandHandler: DeleteBookByIdCommandHandler;
    let service: DeleteBookByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DeleteBookByIdCommandHandler,
                {
                    provide : DeleteBookByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<DeleteBookByIdCommandHandler>(DeleteBookByIdCommandHandler);
        service = module.get<DeleteBookByIdService>(DeleteBookByIdService);
    });

    describe('main', () =>
    {
        test('DeleteBookByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the DeleteBookByIdService', async () =>
        {
            expect(await commandHandler.execute(
                new DeleteBookByIdCommand(
                    books[0].id,
                ),
            )).toBe(undefined);
        });
    });
});