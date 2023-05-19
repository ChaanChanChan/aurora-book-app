import { MockSeeder } from '@aurorajs.dev/core';
import { LibraryAuthor } from '../../domain/author.aggregate';
export declare class MockAuthorSeeder extends MockSeeder<LibraryAuthor> {
    collectionSource: LibraryAuthor[];
    constructor();
    private _createMockDataLang;
}
