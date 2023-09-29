import { Book } from "./book";

export interface BookRepository {
    addBook(uuid: string,
        title: string,
        author: string,
        description: string,
        uniteCode: string,
        loan: boolean,
        status: boolean,): Promise<Book | null>;

    updateBook(
        uuid: string,
        title?: string,
        author?: string,
        description?: string,
    ): Promise<Book | null>;

    listBooks(): Promise<Book | Book[] | null>;

    listInactiveBooks(): Promise<Book | Book[] | null>;

    filterBooks(
        uuid?: string,
        title?: string,
        author?: string,
        uniteCode?: string
    ): Promise<Book[] | null>;

    getBookById(uuid: string): Promise<Book | null>;

    deleteBook(uuid: string): Promise<String | null>;
    
    disableBook(uuid: string): Promise<String | null>;
    
    loanBook(uuid: string, loan:boolean): Promise<string|null>
}