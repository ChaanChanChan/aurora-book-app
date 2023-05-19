import { MockSeeder } from '@aurorajs.dev/core';
import { LibraryBook } from '../../domain/book.aggregate';
export declare class MockBookSeeder extends MockSeeder<LibraryBook> {
    collectionSource: LibraryBook[];
    constructor();
    private _createMockDataLang;
}
