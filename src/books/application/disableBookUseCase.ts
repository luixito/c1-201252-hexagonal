import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class disableBookUseCase {
    constructor(readonly BookRepository: BookRepository) { }

    async run(uuid:string): Promise<string | null> {
        try {
            const book = await this.BookRepository.disableBook(uuid);

            if (book === null) {
                return null
            }
            return "disable";
        } catch (error) {
            return null;
        }
    }
}