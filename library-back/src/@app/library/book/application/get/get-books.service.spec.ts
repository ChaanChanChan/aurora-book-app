import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { GetBooksService } from './get-books.service';
import { IBookRepository } from '../../domain/book.repository';
import { MockBookRepository } from '../../infrastructure/mock/mock-book.repository';

describe('GetBooksService', () =>
{
    let service: GetBooksService;
    let repository: IBookRepository;
    let mockRepository: MockBookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                GetBooksService,
                MockBookRepository,
                {
                    provide : IBookRepository,
                    useValue: {
                        get: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(GetBooksService);
        repository = module.get(IBookRepository);
        mockRepository = module.get(MockBookRepository);
    });

    describe('main', () =>
    {
        test('GetBooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should get books', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource)));
            expect(await service.main()).toBe(mockRepository.collectionSource);
        });
    });
});