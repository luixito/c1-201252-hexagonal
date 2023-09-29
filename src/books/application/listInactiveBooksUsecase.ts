import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class listInactiveBooksUseCase {
    constructor(readonly BookRepository: BookRepository) { }

    async run(): Promise<Book | Book[] | null> {
        try {
            const listBooks = await this.BookRepository.listInactiveBooks();

            return listBooks;
        } catch (error) {
            return null;
        }
    }
}