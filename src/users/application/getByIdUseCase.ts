import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class GetByIdUseCase {
    constructor(readonly userRepository: userRepository) { }

    async run(uuid: string): Promise<User | null> {

        try {
            const getUserById = await this.userRepository.getById(uuid);

            if (!getUserById) {
                return null;
            }
            return getUserById;
        } catch (error) {
            return null;
        }
    }
}