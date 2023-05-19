import { CQMetadata } from '@aurorajs.dev/core';

export class RawSQLBooksQuery
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}