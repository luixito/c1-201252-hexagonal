import { query } from "../../database/database";
import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/reviewRepository";

export class MysqlReviewRepository implements ReviewRepository {
    async addReview(uuid: string, text: string, userId: string, bookId: string, status: boolean): Promise<null | Review> {
        try {
            const sql = `INSERT INTO review (uuid, text, userId, bookId, status)
                VALUES (?, ?, ?, ?, ?);`;
            const values = [uuid, text, userId, bookId, status];

            const newReview: Review = new Review(uuid, text, userId, bookId, status);
            const centencia = await query(sql, values);
            return newReview;

        } catch (error) {
            return null;
        }
    }

    async getReviews(): Promise<Review | Review[] | null> {
        try {
            const sql = "SELECT * FROM review";

            const [rows]: any = await query(sql, []);

            if (rows.length > 0) {
                return rows;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
    async getInactiveReview(): Promise<Review | null> {
        try {
            const sql = "SELECT * FROM review WHERE status = false";

            const [rows]: any = await query(sql, []);

            if (rows.length > 0) {
                return rows;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }

    async filterUserReview(userId: string): Promise<Review[] | null> {
        try {
            const sql = "SELECT * FROM review WHERE userId = ?;";
            const [rows]: any = await query(sql, [userId]);

            if (rows.length > 0) {
                return rows;
            } else {
                return null;
            }

        } catch (error) {
            return null;
        }
    }

    async getReview(uuid: string): Promise<Review | null> {
        try {
            const sql = "SELECT * FROM review WHERE uuid = ?;";
            const [rows]: any = await query(sql, [uuid]);

            if (rows.length > 0) {
                const review = rows[0];
                return new Review(review.uuid, review.text, review.userId, review.bookId, review.status);
            } else {
                return null;
            }

        } catch (error) {
            return null;
        }
    }

    async deleteReview(uuid: string, userId: string): Promise<boolean> {
        try {
            const validationSql = "SELECT userId FROM review WHERE uuid = ?;";
            const [validationResults]: any = await query(validationSql, [uuid]);

            if (validationResults.length === 0) {
                throw new Error("No se encontró la review con el UUID proporcionado.");
            }

            if (validationResults[0].userId !== userId) {
                return (false)
            }

            const sql = "DELETE FROM review WHERE uuid = ? AND userId = ?;";
            const result: any = await query(sql, [uuid, userId]);

            return true;

        } catch (error) {
            return false
        }
    }

    async inactivedReview(uuid: string): Promise<string | null> {
        try {
            const sql = "UPDATE review SET status = '0' WHERE uuid = ?";
            
            const [result]: any = await query(sql, [uuid]);
    
            if (result.affectedRows > 0) {
                return "inactivated";
            } else {
                return "not_found";
            }
        } catch (error) {
            return null;
        }
    }
    
    async updateReview(uuid: string, userId: string, text: string): Promise<Review | null | string> {
        try {
            const exist = "SELECT userId FROM review WHERE uuid = ?;";
            const [result]: any = await query(exist, [uuid]);

            if (result.length === 0) {
                throw new Error("No se encontró la review con el UUID proporcionado.");
            }

            if (result[0].userId !== userId) {
                return ('unauthorized')
            }

            if (!text) {
                throw new Error("No fields to update.");
            }
    
            const updateFields: string[] = [];
            const params: any[] = [];
            
            if (text) {
                updateFields.push("text = ?");
                params.push(text);
            }
    
            params.push(uuid);
            const sql = `UPDATE review SET ${updateFields.join(", ")} WHERE uuid = ?`;
    
            const [update]: any = await query(sql, params);
    
            if (update.affectedRows > 0) {
                const updateReview = await this.getReview(uuid);
                return updateReview;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error updating book:", error);
            return null;
        }
    }

}