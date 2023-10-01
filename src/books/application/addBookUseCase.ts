import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class AddBookUseCase {
    constructor(readonly BookRepository: BookRepository) { }

    async run(
        uuid: string,
        title: string,
        author: string,
        description: string,
        uniteCode: string,
        loan: boolean,
        status: boolean,
    ): Promise<Book | null> {
        try {
            const addBook = await this.BookRepository.addBook(uuid, title, author, description, uniteCode, loan, status);

            if (!title || !author || !description || !uniteCode || !loan || !status) {
                return null;
            }

            return addBook;
        } catch (error) {
            return null;
        }
    }
}