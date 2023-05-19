/* eslint-disable indent */
import { ApiProperty } from '@nestjs/swagger';
import { LibraryAuthorDto } from '../../../library/author/dto/library-author.dto';

export class LibraryBookDto
{
    @ApiProperty({
        type       : String,
        description: 'id [input here api field description]',
    })
    id: string;

    @ApiProperty({
        type       : String,
        description: 'title [input here api field description]',
    })
    title: string;

    @ApiProperty({
        type       : String,
        description: 'publishedAt [input here api field description]',
    })
    publishedAt: string;

    @ApiProperty({
        type       : Number,
        description: 'price [input here api field description]',
    })
    price: number;

    @ApiProperty({
        type       : String,
        description: 'authorId [input here api field description]',
        example    : '977ddc11-b03a-5a77-8a40-26043e9de0d0',
    })
    authorId: string;

    @ApiProperty({
        type       : () => LibraryAuthorDto,
        description: 'LibraryAuthor [input here api field description]',
    })
    author?: LibraryAuthorDto;

    @ApiProperty({
        type       : String,
        description: 'createdAt [input here api field description]',
    })
    createdAt?: string;

    @ApiProperty({
        type       : String,
        description: 'updatedAt [input here api field description]',
    })
    updatedAt?: string;

    @ApiProperty({
        type       : String,
        description: 'deletedAt [input here api field description]',
    })
    deletedAt?: string;

}