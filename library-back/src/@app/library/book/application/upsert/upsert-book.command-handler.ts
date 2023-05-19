/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpsertBookCommand } from './upsert-book.command';
import { UpsertBookService } from './upsert-book.service';
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

@CommandHandler(UpsertBookCommand)
export class UpsertBookCommandHandler implements ICommandHandler<UpsertBookCommand>
{
    constructor(
        private readonly upsertBookService: UpsertBookService,
    ) {}

    async execute(command: UpsertBookCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertBookService.main(
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