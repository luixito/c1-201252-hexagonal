import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class updateBookUseCase {
    constructor(readonly BookRepository: BookRepository) {}

    async run(
        uuid: string,
        title?: string,
        author?: string,
        description?: string,
        ): Promise<Book | null> {
        try {
            const updatedBook = await this.BookRepository.getBookById(uuid);
            if (!updatedBook) {
                return null;
            }

            const updateBook= await this.BookRepository.updateBook(uuid,title,author,description);
            return updateBook;
        } catch (error) {
            return null;
        }
    }
}