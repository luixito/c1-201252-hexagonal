import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class listBooksUseCase {
    constructor(readonly BookRepository: BookRepository) { }

    async run(): Promise<Book | Book[] | null> {
        try {
            const listBooks = await this.BookRepository.listBooks();

            return listBooks;
        } catch (error) {
            return null;
        }
    }
}