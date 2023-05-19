/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable key-spacing */
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { IBookRepository } from '@app/library/book/domain/book.repository';
import { MockBookSeeder } from '@app/library/book/infrastructure/mock/mock-book.seeder';
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';
import { GraphQLConfigModule } from '@aurora/graphql/graphql-config.module';
import { LibraryModule } from '@api/library/library.module';
import * as request from 'supertest';
import * as _ from 'lodash';

// disable import foreign modules, can be micro-services
const importForeignModules = [];

describe('book', () =>
{
    let app: INestApplication;
    let bookRepository: IBookRepository;
    let bookSeeder: MockBookSeeder;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let mockData: any;

    // set timeout to 60s by default are 5s
    jest.setTimeout(60000);

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ...importForeignModules,
                LibraryModule,
                GraphQLConfigModule,
                SequelizeModule.forRootAsync({
                    imports   : [ConfigModule],
                    inject    : [ConfigService],
                    useFactory: (configService: ConfigService) =>
                    {
                        return {
                            dialect       : configService.get('TEST_DATABASE_DIALECT'),
                            storage       : configService.get('TEST_DATABASE_STORAGE'),
                            host          : configService.get('TEST_DATABASE_HOST'),
                            port          : +configService.get('TEST_DATABASE_PORT'),
                            username      : configService.get('TEST_DATABASE_USER'),
                            password      : configService.get('TEST_DATABASE_PASSWORD'),
                            database      : configService.get('TEST_DATABASE_SCHEMA'),
                            synchronize   : configService.get('TEST_DATABASE_SYNCHRONIZE'),
                            logging       : configService.get('TEST_DATABASE_LOGGIN') === 'true' ? console.log : false,
                            autoLoadModels: true,
                            models        : [],
                        };
                    },
                }),
            ],
            providers: [
                MockBookSeeder,
            ],
        })
            .compile();

        mockData = books;
        app = module.createNestApplication();
        bookRepository = module.get<IBookRepository>(IBookRepository);
        bookSeeder = module.get<MockBookSeeder>(MockBookSeeder);

        // seed mock data in memory database
        await bookRepository.insert(bookSeeder.collectionSource);

        await app.init();
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookId must be defined, can not be null');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookTitle property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                title: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookTitle must be defined, can not be null');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookPublishedAt property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                publishedAt: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookPublishedAt must be defined, can not be null');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookPrice property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                price: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookPrice must be defined, can not be null');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookAuthorId property can not to be null', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                authorId: null,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookAuthorId must be defined, can not be null');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookId must be defined, can not be undefined');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookTitle property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                title: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookTitle must be defined, can not be undefined');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookPublishedAt property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                publishedAt: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookPublishedAt must be defined, can not be undefined');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookPrice property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                price: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookPrice must be defined, can not be undefined');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookAuthorId property can not to be undefined', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                authorId: undefined,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookAuthorId must be defined, can not be undefined');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookAuthorId is not allowed, must be a length of 36', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                authorId: '*************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookAuthorId is not allowed, must be a length of 36');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookTitle is too large, has a maximum length of 50', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                title: '***************************************************',
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookTitle is too large, has a maximum length of 50');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookPrice is too large, has a maximum length of 10', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                price: 11111111111,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('Value for BookPrice is too large, has a maximum length of 10');
            });
    });

    test('/REST:POST library/book/create - Got 400 Conflict, BookPrice must have a positive sign', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                price: -1,
            })
            .expect(400)
            .then(res =>
            {
                expect(res.body.message).toContain('The numerical value for BookPrice must have a positive sign, this field does not accept negative values');
            });
    });

    test('/REST:POST library/book/create - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send(mockData[0])
            .expect(409);
    });

    test('/REST:POST library/books/paginate', () =>
    {
        return request(app.getHttpServer())
            .post('/library/books/paginate')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    offset: 0,
                    limit: 5,
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual({
                    total: bookSeeder.collectionResponse.length,
                    count: bookSeeder.collectionResponse.length,
                    rows : bookSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/REST:POST library/books/get', () =>
    {
        return request(app.getHttpServer())
            .post('/library/books/get')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toEqual(
                    bookSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))),
                );
            });
    });

    test('/REST:POST library/book/find - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: 'a1ee8168-57c0-5862-848a-a4a6a6707065',
                    },
                },
            })
            .expect(404);
    });

    test('/REST:POST library/book/create', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/create')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(201);
    });

    test('/REST:POST library/book/find', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/find')
            .set('Accept', 'application/json')
            .send({
                query:
                {
                    where:
                    {
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:POST library/book/find/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/find/71fbd648-f436-5d8c-9057-2efb5a767b40')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:POST library/book/find/{id}', () =>
    {
        return request(app.getHttpServer())
            .post('/library/book/find/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:PUT library/book/update - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .put('/library/book/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: 'dd731cf4-9f92-5be1-9b98-bea59073af93',
            })
            .expect(404);
    });

    test('/REST:PUT library/book/update', () =>
    {
        return request(app.getHttpServer())
            .put('/library/book/update')
            .set('Accept', 'application/json')
            .send({
                ...mockData[0],
                id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/REST:DELETE library/book/delete/{id} - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .delete('/library/book/delete/23c3ea76-f742-562f-87ee-8c9b51988193')
            .set('Accept', 'application/json')
            .expect(404);
    });

    test('/REST:DELETE library/book/delete/{id}', () =>
    {
        return request(app.getHttpServer())
            .delete('/library/book/delete/5b19d6ac-4081-573b-96b3-56964d5326a8')
            .set('Accept', 'application/json')
            .expect(200);
    });

    test('/GraphQL libraryCreateBook - Got 409 Conflict, item already exist in database', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:LibraryCreateBookInput!)
                    {
                        libraryCreateBook (payload:$payload)
                        {
                            id
                            title
                            publishedAt
                            price
                            authorId
                        }
                    }
                `,
                variables:
                {
                    payload: _.omit(mockData[0], ['createdAt','updatedAt','deletedAt']),
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(409);
                expect(res.body.errors[0].extensions.originalError.message).toContain('already exist in database');
            });
    });

    test('/GraphQL libraryPaginateBooks', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement $constraint:QueryStatement)
                    {
                        libraryPaginateBooks (query:$query constraint:$constraint)
                        {
                            total
                            count
                            rows
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        offset: 0,
                        limit: 5,
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.libraryPaginateBooks).toEqual({
                    total: bookSeeder.collectionResponse.length,
                    count: bookSeeder.collectionResponse.length,
                    rows : bookSeeder.collectionResponse.map(item => expect.objectContaining(_.omit(item, ['createdAt', 'updatedAt', 'deletedAt']))).slice(0, 5),
                });
            });
    });

    test('/GraphQL libraryGetBooks', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        libraryGetBooks (query:$query)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {},
            })
            .expect(200)
            .then(res =>
            {
                for (const [index, value] of res.body.data.libraryGetBooks.entries())
                {
                    expect(bookSeeder.collectionResponse[index]).toEqual(expect.objectContaining(_.omit(value, ['createdAt', 'updatedAt', 'deletedAt'])));
                }
            });
    });

    test('/GraphQL libraryCreateBook', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:LibraryCreateBookInput!)
                    {
                        libraryCreateBook (payload:$payload)
                        {
                            id
                            title
                            publishedAt
                            price
                            authorId
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.libraryCreateBook).toHaveProperty('id', '5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL libraryFindBook - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        libraryFindBook (query:$query)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '149301c7-0d0c-5c72-a870-6050470f8f51',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL libraryFindBook', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($query:QueryStatement)
                    {
                        libraryFindBook (query:$query)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables:
                {
                    query:
                    {
                        where:
                        {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.libraryFindBook.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL libraryFindBookById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        libraryFindBookById (id:$id)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: 'e0c431bb-41e2-5cab-9f50-f0bf60190a86',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL libraryFindBookById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    query ($id:ID!)
                    {
                        libraryFindBookById (id:$id)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.libraryFindBookById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL libraryUpdateBookById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:LibraryUpdateBookByIdInput!)
                    {
                        libraryUpdateBookById (payload:$payload)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '46ef33eb-156e-5e6c-8a35-d3ecb6392438',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL libraryUpdateBookById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:LibraryUpdateBookByIdInput!)
                    {
                        libraryUpdateBookById (payload:$payload)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.libraryUpdateBookById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL libraryUpdateBooks', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($payload:LibraryUpdateBooksInput! $query: QueryStatement)
                    {
                        libraryUpdateBooks (payload:$payload query:$query)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    payload: {
                        ...mockData[0],
                        id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                    },
                    query: {
                        where: {
                            id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                        },
                    },
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.libraryUpdateBooks[0].id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    test('/GraphQL libraryDeleteBookById - Got 404 Not Found', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        libraryDeleteBookById (id:$id)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '7507325f-a162-5f67-a66e-e34111435c0c',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body).toHaveProperty('errors');
                expect(res.body.errors[0].extensions.originalError.statusCode).toBe(404);
                expect(res.body.errors[0].extensions.originalError.message).toContain('not found');
            });
    });

    test('/GraphQL libraryDeleteBookById', () =>
    {
        return request(app.getHttpServer())
            .post('/graphql')
            .set('Accept', 'application/json')
            .send({
                query: `
                    mutation ($id:ID!)
                    {
                        libraryDeleteBookById (id:$id)
                        {
                            id
                            title
                            publishedAt
                            price
                            createdAt
                            updatedAt
                        }
                    }
                `,
                variables: {
                    id: '5b19d6ac-4081-573b-96b3-56964d5326a8',
                },
            })
            .expect(200)
            .then(res =>
            {
                expect(res.body.data.libraryDeleteBookById.id).toStrictEqual('5b19d6ac-4081-573b-96b3-56964d5326a8');
            });
    });

    afterAll(async () =>
    {
        await bookRepository.delete({
            queryStatement: {
                where: {},
            },
        });
        await app.close();
    });
});