import { query } from "../../database/database";
import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class MysqlUserRepository implements userRepository {
    async register(uuid: string, name: string, lastName: string, email: string, tel: string, status: boolean, password: string): Promise<User | null> {
        try {
            let sql = "INSERT INTO users(uuid, name, lastName, tel , email, password, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
            const params: any[] = [uuid, name, lastName, tel, email, password, status];
            const [result]: any = await query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }

    async update(uuid: string, name?: string | undefined, lastName?: string | undefined, tel?: string | undefined, email?: string | undefined): Promise<User | null> {
        try {
            if (!name && !lastName && !tel && !email) {
                throw new Error("No fields to update.");
            }

            const updateFields: string[] = [];
            const params: any[] = [];

            if (name) {
                updateFields.push("name = ?");
                params.push(name);
            }

            if (lastName) {
                updateFields.push("lastName = ?");
                params.push(lastName);
            }

            if (tel) {
                updateFields.push("tel = ?");
                params.push(tel);
            }

            if (email) {
                updateFields.push("email = ?");
                params.push(email);
            }

            params.push(uuid);
            const sql = `UPDATE users SET ${updateFields.join(", ")} WHERE uuid = ?`;

            const [result]: any = await query(sql, params);

            if (result.affectedRows > 0) {
                const updatedUser = await this.getById(uuid);
                return updatedUser;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error updating user:", error);
            return null;
        }
    }

    async deleteUser(uuid: string): Promise<string | null> {
        try {
            const sql = "DELETE FROM users WHERE uuid = ?";
            const [result]: any = await query(sql, [uuid]);
            if (result.affectedRows > 0) {
                return "User deleted successfully";
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            return null;
        }
    }

    async login(email: string, password: string): Promise<string | null> {
        try {
            const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
            const params: any[] = [email, password];
            const [result]: any = await query(sql, params);
            if (result.length > 0) {
                return "Login successful";
            } else {
                return null;
            }
        } catch (error) {
            console.error("Login error:", error);
            return null;
        }
    }

    async updatePassword(uuid: string, password: string): Promise<User | null> {
        try {
            const sql = "UPDATE users SET password = ? WHERE uuid = ?";
            const [result]: any = await query(sql, [password, uuid]);

            if (result.affectedRows > 0) {
                const updatedUser = await this.getById(uuid);
                return updatedUser;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error updating password:", error);
            return null;
        }
    }

    async allUsers(): Promise<User[] | null> {
        try {
            const sql = "SELECT * FROM users";

            const [result]: any = await query(sql, []);
            if (result.length > 0) {
                return result;

            }
            return null;
        } catch (error) {
            console.error("Error fetching all users:", error);
            return null;
        }
    }

    async getById(uuid: string): Promise<User | null> {
        try {
            const sql = "SELECT * FROM users WHERE uuid = ?";

            const [rows]: any = await query(sql, [uuid]);

            if (rows.length > 0) {
                const user = rows[0];
                return user
            }
            return null;
        } catch (error) {
            console.error("Error fetching user by UUID:", error);
            return null;
        }
    }

    async allUsersDisabled(): Promise<User[] | null> {
        try {
            const sql = "SELECT * FROM users WHERE status = 0";

            const [rows]: any = await query(sql, []);

            if (rows.length > 0) {
                return rows;
            }
            return null;
        } catch (error) {
            console.error("Error fetching disabled users:", error);
            return null;
        }
    }

    async disableUser(uuid: string): Promise<string | null> {
        try {
            const sql = "UPDATE users SET status = FALSE WHERE uuid = ?";

            const [result]: any = await query(sql, [uuid]);

            if (result.affectedRows > 0) {
                return "User disabled successfully";
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error disabling user:", error);
            return null;
        }
    }

    filter(email?: string | undefined, name?: string | undefined, tel?: string | undefined): Promise<User[] | null> {
        throw new Error("Method not implemented.");
    }

}