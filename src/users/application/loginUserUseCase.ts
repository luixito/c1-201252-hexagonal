import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class LoginUserUseCase {
    constructor(readonly userRepository: userRepository) {}
    async run(
        email: string,
        password: string,
        ): Promise<string | null> {
        try {
            const loginUser = await this.userRepository.login(email, password);
            if (!loginUser) {
                return null;
            }
            return "Usuario logeado correctamente";
        } catch (error) {
            return null;
        }
    }
}
