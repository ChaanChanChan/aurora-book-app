/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { DeleteBookByIdService } from './delete-book-by-id.service';
import { BookId } from '../../domain/value-objects';
import { IBookRepository } from '../../domain/book.repository';
import { MockBookRepository } from '../../infrastructure/mock/mock-book.repository';

describe('DeleteBookByIdService', () =>
{
    let service: DeleteBookByIdService;
    let repository: IBookRepository;
    let mockRepository: MockBookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                DeleteBookByIdService,
                MockBookRepository,
                {
                    provide : IBookRepository,
                    useValue: {
                        deleteById: id => { /**/ },
                        findById  : id => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(DeleteBookByIdService);
        repository = module.get(IBookRepository);
        mockRepository = module.get(MockBookRepository);
    });

    describe('main', () =>
    {
        test('DeleteBookByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete book and emit event', async () =>
        {
            jest.spyOn(repository, 'findById').mockImplementation(() => new Promise(resolve => resolve(mockRepository.collectionSource[0])));
            expect(await service.main(
                new BookId(books[0].id),
            )).toBe(undefined);
        });
    });
});