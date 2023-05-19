/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus } from '@nestjs/cqrs';

// custom items
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { UpdateBookByIdService } from './update-book-by-id.service';
import {
    BookId,
    BookTitle,
    BookPublishedAt,
    BookPrice,
    BookAuthorId,
    BookCreatedAt,
    BookUpdatedAt,
    BookDeletedAt,
} from '../../domain/value-objects';
import { IBookRepository } from '../../domain/book.repository';
import { MockBookRepository } from '../../infrastructure/mock/mock-book.repository';

describe('UpdateBookByIdService', () =>
{
    let service: UpdateBookByIdService;
    let repository: IBookRepository;
    let mockRepository: MockBookRepository;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UpdateBookByIdService,
                MockBookRepository,
                {
                    provide : IBookRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(UpdateBookByIdService);
        repository = module.get(IBookRepository);
        mockRepository = module.get(MockBookRepository);
    });

    describe('main', () =>
    {
        test('UpdateBookByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a book and emit event', async () =>
        {
            expect(await service.main(
                {
                    id: new BookId(books[0].id),
                    title: new BookTitle(books[0].title),
                    publishedAt: new BookPublishedAt(books[0].publishedAt),
                    price: new BookPrice(books[0].price),
                    authorId: new BookAuthorId(books[0].authorId),
                },
            )).toBe(undefined);
        });
    });
});