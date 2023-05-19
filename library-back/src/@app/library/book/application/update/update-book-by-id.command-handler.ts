/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateBookByIdCommand } from './update-book-by-id.command';
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

@CommandHandler(UpdateBookByIdCommand)
export class UpdateBookByIdCommandHandler implements ICommandHandler<UpdateBookByIdCommand>
{
    constructor(
        private readonly updateBookByIdService: UpdateBookByIdService,
    ) {}

    async execute(command: UpdateBookByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.updateBookByIdService.main(
            {
                id: new BookId(command.payload.id),
                title: new BookTitle(command.payload.title, { undefinable: true }),
                publishedAt: new BookPublishedAt(command.payload.publishedAt, { undefinable: true }),
                price: new BookPrice(command.payload.price, { undefinable: true }),
                authorId: new BookAuthorId(command.payload.authorId, { undefinable: true }),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}