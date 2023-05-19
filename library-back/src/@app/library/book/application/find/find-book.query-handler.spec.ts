import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { FindBookQueryHandler } from './find-book.query-handler';
import { MockBookRepository } from '@app/library/book/infrastructure/mock/mock-book.repository';
import { IBookRepository } from '@app/library/book/domain/book.repository';
import { BookMapper } from '@app/library/book/domain/book.mapper';
import { FindBookQuery } from './find-book.query';
import { FindBookService } from './find-book.service';

describe('FindBookQueryHandler', () =>
{
    let queryHandler: FindBookQueryHandler;
    let service: FindBookService;
    let repository: MockBookRepository;
    let mapper: BookMapper;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                FindBookQueryHandler,
                {
                    provide : IBookRepository,
                    useClass: MockBookRepository,
                },
                {
                    provide : FindBookService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        queryHandler = module.get<FindBookQueryHandler>(FindBookQueryHandler);
        service = module.get<FindBookService>(FindBookService);
        repository = <MockBookRepository>module.get<IBookRepository>(IBookRepository);
        mapper = new BookMapper();
    });

    describe('main', () =>
    {
        test('FindBookQueryHandler should be defined', () =>
        {
            expect(queryHandler).toBeDefined();
        });

        test('should return an book founded', async () =>
        {
            jest.spyOn(service, 'main').mockImplementation(() => new Promise(resolve => resolve(repository.collectionSource[0])));
            expect(await queryHandler.execute(
                new FindBookQuery(),
            )).toStrictEqual(mapper.mapAggregateToResponse(repository.collectionSource[0]));
        });
    });
});