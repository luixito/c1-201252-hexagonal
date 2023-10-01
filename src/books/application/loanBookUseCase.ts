import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class LoanBookUseCase {
    constructor(readonly BookRepository: BookRepository) { }

    async run(
        uuid: string,
        loan: string,
    ): Promise<Book | null> {

        try {
            const loanBook = await this.BookRepository.loanBook(uuid, loan);
            if (loanBook === null) {
                return null
            }

            return loanBook;
        } catch (error) {
            return null;
        }
    }
}