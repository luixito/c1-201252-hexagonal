import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class deleteBookUseCase {
    constructor(readonly BookRepository: BookRepository) { }

    async run(uuid:string): Promise<string | null> {
        try {
            const book = await this.BookRepository.deleteBook(uuid);

            return "delete";
        } catch (error) {
            return null;
        }
    }
}