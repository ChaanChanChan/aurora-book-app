/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { DeleteBooksService } from './delete-books.service';
import { IBookRepository } from '../../domain/book.repository';
import { MockBookRepository } from '../../infrastructure/mock/mock-book.repository';

describe('DeleteBooksService', () =>
{
    let service: DeleteBooksService;
    let repository: IBookRepository;
    let mockRepository: MockBookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                DeleteBooksService,
                MockBookRepository,
                {
                    provide : IBookRepository,
                    useValue: {
                        get   : () => { /**/ },
                        delete: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(DeleteBooksService);
        repository = module.get(IBookRepository);
        mockRepository = module.get(MockBookRepository);
    });

    describe('main', () =>
    {
        test('DeleteBooksService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should delete book and emit event', async () =>
        {
            jest.spyOn(repository, 'get').mockImplementation(() => new Promise(resolve => resolve([])));
            expect(await service.main()).toBe(undefined);
        });
    });
});