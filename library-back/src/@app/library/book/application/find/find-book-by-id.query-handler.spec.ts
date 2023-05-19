import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { FindBookByIdQueryHandler } from './find-book-by-id.query-handler';
import { MockBookRepository } from '@app/library/book/infrastructure/mock/mock-book.repository';
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { IBookRepository } from '@app/library/book/domain/book.repository';
import { BookMapper } from '@app/library/book/domain/book.mapper';
import { FindBookByIdQuery } from './find-book-by-id.query';
import { FindBookByIdService } from './find-book-by-id.service';

describe('FindBookByIdQueryHandler', () =>
{
    let queryHandler: FindBookByIdQueryHandler;
    let service: FindBookByIdService;
    let repository: MockBookRepository;
    let mapper: BookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FindBookByIdQueryHandler,
                {
                    provide : IBookRepository,
                    useClass: MockBookRepository,
                },
                {
                    provide : FindBookByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<FindBookByIdQueryHandler>(FindBookByIdQueryHandler);
        service = module.get<FindBookByIdService>(FindBookByIdService);
        repository = <MockBookRepository>module.get<IBookRepository>(IBookRepository);
        mapper = new BookMapper();
    });

    describe('main', () =>
    {
        test('FindBookByIdQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an book founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new FindBookByIdQuery(
                    books[0].id,

                ),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});