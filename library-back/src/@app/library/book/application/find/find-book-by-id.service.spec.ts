import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { FindBookByIdService } from './find-book-by-id.service';
import { BookId } from '../../domain/value-objects';
import { IBookRepository } from '../../domain/book.repository';
import { MockBookRepository } from '../../infrastructure/mock/mock-book.repository';

describe('FindBookByIdService', () =>
{
    let service: FindBookByIdService;
    let repository: IBookRepository;
    let mockRepository: MockBookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                FindBookByIdService,
                MockBookRepository,
                {
                    provide : IBookRepository,
                    useValue: {
                        findById: id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(FindBookByIdService);
        repository = module.get(IBookRepository);
        mockRepository = module.get(MockBookRepository);
    });

    describe('main', () =>
    {
        test('FindBookByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should find book by id', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new BookId(books[0].id),
            )).toBe(mockRepository.collectionSource[0]);
        });
    });
});