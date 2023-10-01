import { Book } from "./book";

export interface BookRepository {
    addBook(uuid: string,
        title: string,
        author: string,
        description: string,
        uniteCode: string,
        loan: string,
        status: string,): Promise<Book | null>;

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
    ): Promise<Book[] | null | string>;

    getBookById(uuid: string): Promise<Book | null>;

    deleteBook(uuid: string): Promise<String | null>;
    
    disableBook(uuid: string): Promise<String | null>;
    
    loanBook(uuid: string, loan:string): Promise<Book|null>
}