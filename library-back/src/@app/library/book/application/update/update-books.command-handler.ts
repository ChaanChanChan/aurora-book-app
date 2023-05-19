/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateBooksCommand } from './update-books.command';
import { UpdateBooksService } from './update-books.service';
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

@CommandHandler(UpdateBooksCommand)
export class UpdateBooksCommandHandler implements ICommandHandler<UpdateBooksCommand>
{
    constructor(
        private readonly updateBooksService: UpdateBooksService,
    ) {}

    async execute(command: UpdateBooksCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateBooksService.main(
            {
                id: new BookId(command.payload.id, { undefinable: true }),
                title: new BookTitle(command.payload.title, { undefinable: true }),
                publishedAt: new BookPublishedAt(command.payload.publishedAt, { undefinable: true }),
                price: new BookPrice(command.payload.price, { undefinable: true }),
                authorId: new BookAuthorId(command.payload.authorId, { undefinable: true }),
            },
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}