import gql from 'graphql-tag';

export const fields = `
    name
    createdAt
    updatedAt
`;

export const relationsFields = `
`;

// default methods
export const paginationQuery = gql`
    query LibraryPaginateAuthors (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        pagination: libraryPaginateAuthors (
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
    query LibraryGetAuthors (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        objects: libraryGetAuthors (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findByIdQuery = gql`
    query LibraryFindAuthorById (
        $id: ID
        $constraint: QueryStatement
    ) {
        object: libraryFindAuthorById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findQuery = gql`
    query LibraryFindAuthor (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        object: libraryFindAuthor (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const createMutation = gql`
    mutation LibraryCreateAuthor (
        $payload: LibraryCreateAuthorInput!
    ) {
        libraryCreateAuthor (
            payload: $payload
        ) {
            ${fields}
        }
    }
`;

export const updateByIdMutation = gql`
    mutation LibraryUpdateAuthorById (
        $payload: LibraryUpdateAuthorByIdInput!
        $constraint: QueryStatement
    ) {
        libraryUpdateAuthorById (
            payload: $payload
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const updateMutation = gql`
    mutation LibraryUpdateAuthors (
        $payload: LibraryUpdateAuthorsInput!
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        libraryUpdateAuthors (
            payload: $payload
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteByIdMutation = gql`
    mutation LibraryDeleteAuthorById (
        $id: ID!
        $constraint: QueryStatement
    ) {
        libraryDeleteAuthorById (
            id: $id
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteMutation = gql`
    mutation LibraryDeleteAuthors (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        libraryDeleteAuthors (
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;
