import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class allUsersDisabledUseCase {
    constructor(readonly userRepository: userRepository) { }

    async run(): Promise<User |User[] | null> {

        try {
            const allUsers = await this.userRepository.allUsersDisabled();
            return allUsers;
        } catch (error) {
            return null;
        }
    }
}