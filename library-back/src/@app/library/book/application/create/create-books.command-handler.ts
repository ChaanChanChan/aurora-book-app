/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateBooksCommand } from './create-books.command';
import { CreateBooksService } from './create-books.service';
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

@CommandHandler(CreateBooksCommand)
export class CreateBooksCommandHandler implements ICommandHandler<CreateBooksCommand>
{
    constructor(
        private readonly createBooksService: CreateBooksService,
    ) {}

    async execute(command: CreateBooksCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createBooksService.main(
            command.payload
                .map(book =>
                {
                    return {
                        id: new BookId(book.id),
                        title: new BookTitle(book.title),
                        publishedAt: new BookPublishedAt(book.publishedAt),
                        price: new BookPrice(book.price),
                        authorId: new BookAuthorId(book.authorId),
                    };
                }),
            command.cQMetadata,
        );
    }
}