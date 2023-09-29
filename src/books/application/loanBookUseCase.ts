import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class LoanBookUseCase {
    constructor(readonly BookRepository: BookRepository) {}

    async run(
        uuid: string,
        loan: boolean,
        ): Promise<string | null> {
        try {
            const loanBook = await this.BookRepository.loanBook(uuid, loan);

            return "loan true";
        } catch (error) {
            return null;
        }
    }
}