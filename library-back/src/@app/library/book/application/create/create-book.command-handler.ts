/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateBookCommand } from './create-book.command';
import { CreateBookService } from './create-book.service';
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

@CommandHandler(CreateBookCommand)
export class CreateBookCommandHandler implements ICommandHandler<CreateBookCommand>
{
    constructor(
        private readonly createBookService: CreateBookService,
    ) {}

    async execute(command: CreateBookCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createBookService.main(
            {
                id: new BookId(command.payload.id),
                title: new BookTitle(command.payload.title),
                publishedAt: new BookPublishedAt(command.payload.publishedAt),
                price: new BookPrice(command.payload.price),
                authorId: new BookAuthorId(command.payload.authorId),
            },
            command.cQMetadata,
        );
    }
}