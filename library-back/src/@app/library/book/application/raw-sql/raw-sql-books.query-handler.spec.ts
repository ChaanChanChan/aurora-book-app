import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { MockBookRepository } from '@app/library/book/infrastructure/mock/mock-book.repository';
import { IBookRepository } from '@app/library/book/domain/book.repository';
import { BookMapper } from '@app/library/book/domain/book.mapper';
import { RawSQLBooksQueryHandler } from './raw-sql-books.query-handler';
import { RawSQLBooksQuery } from './raw-sql-books.query';
import { RawSQLBooksService } from './raw-sql-books.service';

describe('RawSQLBooksQueryHandler', () =>
{
    let queryHandler: RawSQLBooksQueryHandler;
    let service: RawSQLBooksService;
    let repository: MockBookRepository;
    let mapper: BookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                RawSQLBooksQueryHandler,
                {
                    provide : IBookRepository,
                    useClass: MockBookRepository,
                },
                {
                    provide : RawSQLBooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<RawSQLBooksQueryHandler>(RawSQLBooksQueryHandler);
        service = module.get<RawSQLBooksService>(RawSQLBooksService);
        repository = <MockBookRepository>module.get<IBookRepository>(IBookRepository);
        mapper = new BookMapper();
    });

    describe('main', () =>
    {
        test('RawSQLBooksQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an books founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource)));
            expect(await queryHandler.execute(
                new RawSQLBooksQuery(),
            )).toStrictEqual(mapper.mapAggregatesToResponses(repository.collectionSource));
        });
    });
});