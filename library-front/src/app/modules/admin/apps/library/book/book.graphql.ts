import gql from 'graphql-tag';

export const fields = `
    title
    publishedAt
    price
    authorId
    createdAt
    updatedAt
`;

export const relationsFields = `
    libraryGetAuthors (
        query: $queryAuthors
        constraint: $constraintAuthors
    ) {
        id
        name
    }
`;

// default methods
export const paginationQuery = gql`
    query LibraryPaginateBooks (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        pagination: libraryPaginateBooks (
            query: $query
            constraint: $constraint
        ) {
            total
            rows
            count
        }
    }
`;

export const getQuery = gql`
    query LibraryGetBooks (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        objects: libraryGetBooks (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const getRelations = gql`
    query LibraryGetBooksRelations(
        $queryAuthors: QueryStatement
        $constraintAuthors: QueryStatement
    ) {
        ${relationsFields}
    }
`;

export const findByIdQuery = gql`
    query LibraryFindBookById (
        $id: ID
        $constraint: QueryStatement
    ) {
        object: libraryFindBookById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findByIdWithRelationsQuery = gql`
    query LibraryFindBookByIdWithRelations (
        $id: ID
        $constraint: QueryStatement
        $queryAuthors: QueryStatement
        $constraintAuthors: QueryStatement
    ) {
        object: libraryFindBookById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
        ${relationsFields}
    }
`;

export const findQuery = gql`
    query LibraryFindBook (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        object: libraryFindBook (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const createMutation = gql`
    mutation LibraryCreateBook (
        $payload: LibraryCreateBookInput!
    ) {
        libraryCreateBook (
            payload: $payload
        ) {
            ${fields}
        }
    }
`;

export const updateByIdMutation = gql`
    mutation LibraryUpdateBookById (
        $payload: LibraryUpdateBookByIdInput!
        $constraint: QueryStatement
    ) {
        libraryUpdateBookById (
            payload: $payload
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const updateMutation = gql`
    mutation LibraryUpdateBooks (
        $payload: LibraryUpdateBooksInput!
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        libraryUpdateBooks (
            payload: $payload
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteByIdMutation = gql`
    mutation LibraryDeleteBookById (
        $id: ID!
        $constraint: QueryStatement
    ) {
        libraryDeleteBookById (
            id: $id
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteMutation = gql`
    mutation LibraryDeleteBooks (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        libraryDeleteBooks (
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;
