import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class getBookByIdUseCase {
    constructor(readonly BookRepository: BookRepository) { }

    async run(uuid:string): Promise<Book | null> {
        try {
            const book = await this.BookRepository.getBookById(uuid);

            if (!book) {
                return null;
            }
            return book;
        } catch (error) {
            return null;
        }
    }
}