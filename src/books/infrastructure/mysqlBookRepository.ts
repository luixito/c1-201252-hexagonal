import { query } from "../../database/database";
import { Book } from "../domain/book";
import { BookRepository } from "../domain/bookRepository";

export class MysqlBookRepository implements BookRepository {
    async addBook(uuid: string, title: string, author: string, description: string, uniteCode: string, loan: boolean, status: boolean): Promise<Book | null> {
        try {
            let sql = "INSERT INTO books(uuid, title, author, description , uniteCode, loan, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const params: any[] = [uuid, title, author, description , uniteCode, loan, status];
            const [result]: any = await query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
    async updateBook(uuid: string, title?: string | undefined, author?: string | undefined, description?: string | undefined): Promise<Book | null> {
        try {
            if (!title && !author && description) {
                throw new Error("No fields to update.");
            }
    
            const updateFields: string[] = [];
            const params: any[] = [];
            
            if (title) {
                updateFields.push("title = ?");
                params.push(title);
            }
    
            if (author) {
                updateFields.push("author = ?");
                params.push(author);
            }
    
            if (description) {
                updateFields.push("description = ?");
                params.push(description);
            }
    
            params.push(uuid);
            const sql = `UPDATE books SET ${updateFields.join(", ")} WHERE uuid = ?`;
    
            const [result]: any = await query(sql, params);
    
            if (result.affectedRows > 0) {
                const updatedBook = await this.getBookById(uuid);
                return updatedBook;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error updating book:", error);
            return null;
        }
    }
    async listBooks(): Promise<Book | Book[] | null> {
        try {
            const sql = "SELECT * FROM books";
            
            const [result]: any = await query(sql,[]);
            
            return result;
        } catch (error) {
            return null;
        }
    }

    async listInactiveBooks(): Promise<Book | Book[] | null> {
        try {
            const sql = "SELECT * FROM books WHERE status = false";
            
            const [rows]: any = await query(sql,[]);
    
            return rows.map((row: any) => new Book(row.uuid, row.name, row.lastName, row.email, row.tel, row.status, row.password));
        } catch (error) {
            return null;
        }
    }

    filterBooks(uuid?: string | undefined, title?: string | undefined, author?: string | undefined, uniteCode?: string | undefined): Promise<Book[] | null> {
        throw new Error("Method not implemented.");
    }

    async getBookById(uuid: string): Promise<Book | null> {
        try {
            const sql = "SELECT * FROM books WHERE uuid = ?";
            
            const [rows]: any = await query(sql, [uuid]);
    
            if (rows.length > 0) {
                const book = rows[0];
                return new Book(book.uuid, book.name, book.lastName, book.email, book.tel, book.status, book.password);
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }

    async deleteBook(uuid: string): Promise<String | null> {
        try {
            const sql = "DELETE FROM book WHERE uuid = ?";
            const [result]: any = await query(sql, [uuid]);
            if (result.affectedRows > 0) {
                return "book deleted successfully";
            } else {
                console.error("Error deleting book");
                return null;
            }
        } catch (error) {
            console.error("Error deleting book:", error);
            return null;
        }
    }

    async disableBook(uuid: string): Promise<String | null> {
         try {
            const sql = "UPDATE book SET status = FALSE WHERE uuid = ?";
            
            const [result]: any = await query(sql, [uuid]);
    
            if (result.affectedRows > 0) {
                return "book disabled successfully";
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error disabling book:", error);
            return null;
        }
    }

    async loanBook(uuid: string, loan: boolean): Promise<string | null> {
        try {
            const sql = "UPDATE book SET loan = FALSE WHERE uuid = ?";
            
            const [result]: any = await query(sql, [uuid]);
    
            if (result.affectedRows > 0) {
                return "book loan successfully";
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error loan book:", error);
            return null;
        }
    }

}