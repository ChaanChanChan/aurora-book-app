import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { RawSQLBooksService } from './raw-sql-books.service';
import { IBookRepository } from '../../domain/book.repository';
import { MockBookRepository } from '../../infrastructure/mock/mock-book.repository';

describe('RawSQLBooksService', () =>
{
    let service: RawSQLBooksService;
    let repository: IBookRepository;
    let mockRepository: MockBookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                RawSQLBooksService,
                MockBookRepository,
                {
                    provide : IBookRepository,
                    useValue: {
                        rawSQL: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service         = module.get(RawSQLBooksService);
        repository      = module.get(IBookRepository);
        mockRepository  = module.get(MockBookRepository);
    });

    describe('main', () =>
    {
        test('RawSQLBooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get books', async () =>
        {
            jest.spyOn(repository, 'rawSQL').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});