import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class UpdatePasswordUseCase {
    constructor(readonly userRepository: userRepository) { }

    async run(uuid: string, password: string): Promise<User | null> {

        try {
            const updatedInfo = await this.userRepository.getById(uuid);
            if (updatedInfo === null) {
                return null
            }

            const updateInfo = await this.userRepository.updatePassword(uuid, password);
            return updateInfo;
        } catch (error) {
            return null;
        }
    }
}