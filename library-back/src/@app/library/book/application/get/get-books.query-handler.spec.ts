import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { GetBooksQueryHandler } from './get-books.query-handler';
import { MockBookRepository } from '@app/library/book/infrastructure/mock/mock-book.repository';
import { IBookRepository } from '@app/library/book/domain/book.repository';
import { BookMapper } from '@app/library/book/domain/book.mapper';
import { GetBooksQuery } from './get-books.query';
import { GetBooksService } from './get-books.service';

describe('GetBooksQueryHandler', () =>
{
    let queryHandler: GetBooksQueryHandler;
    let service: GetBooksService;
    let repository: MockBookRepository;
    let mapper: BookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                GetBooksQueryHandler,
                {
                    provide : IBookRepository,
                    useClass: MockBookRepository,
                },
                {
                    provide : GetBooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<GetBooksQueryHandler>(GetBooksQueryHandler);
        service = module.get<GetBooksService>(GetBooksService);
        repository = <MockBookRepository>module.get<IBookRepository>(IBookRepository);
        mapper = new BookMapper();
    });

    describe('main', () =>
    {
        test('GetBooksQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an books founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new GetBooksQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});