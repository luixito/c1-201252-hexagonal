import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class DisableUserUseCase {
    constructor(readonly userRepository: userRepository) { }

    async run(uuid:string): Promise<string| null> {

        try {
            const disabledUser = await this.userRepository.disableUser(uuid);
            return disabledUser;
        } catch (error) {
            return null;
        }
    }
}