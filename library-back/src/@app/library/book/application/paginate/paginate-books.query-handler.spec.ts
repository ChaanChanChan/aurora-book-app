import { Test, TestingModule } from '@nestjs/testing';
import { PaginationResponse } from '@aurorajs.dev/core';

// custom items
import { PaginateBooksQueryHandler } from './paginate-books.query-handler';
import { MockBookRepository } from '@app/library/book/infrastructure/mock/mock-book.repository';
import { IBookRepository } from '@app/library/book/domain/book.repository';
import { BookMapper } from '@app/library/book/domain/book.mapper';
import { PaginateBooksQuery } from './paginate-books.query';
import { PaginateBooksService } from './paginate-books.service';

describe('PaginateBooksQueryHandler', () =>
{
    let queryHandler: PaginateBooksQueryHandler;
    let service: PaginateBooksService;
    let repository: MockBookRepository;
    let mapper: BookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PaginateBooksQueryHandler,
                {
                    provide : IBookRepository,
                    useClass: MockBookRepository,
                },
                {
                    provide : PaginateBooksService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<PaginateBooksQueryHandler>(PaginateBooksQueryHandler);
        service = module.get<PaginateBooksService>(PaginateBooksService);
        repository = <MockBookRepository>module.get<IBookRepository>(IBookRepository);
        mapper = new BookMapper();
    });

    describe('main', () =>
    {
        test('PaginateBooksQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an books paginated', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(
                {
                    count: 10,
                    total: 100,
                    rows : repository.collectionSource.slice(0,10),
                },
            )));
            expect(await queryHandler.execute(
                new PaginateBooksQuery(
                    {
                        offset: 0,
                        limit : 10,
                    },
                ),
            )).toStrictEqual(
                new PaginationResponse(
                    100,
                    10,
                    repository.collectionSource.slice(0,10).map(item => item.toDTO()),
                ),
            );
        });
    });
});