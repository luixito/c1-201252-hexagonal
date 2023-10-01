import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class filterBooksUseCase {
    constructor(readonly BookRepository: BookRepository) { }

    async run(uuid: string, title: string, author: string, uniteCode: string): Promise<null | Book[] | string> {
        try {
            const book = await this.BookRepository.filterBooks(uuid, title, author, uniteCode);
            if (book === null) {
                return null
            } else if (book === "no encontrados") {
                return null
            }

            return book;
        } catch (error) {
            return null;
        }
    }
}