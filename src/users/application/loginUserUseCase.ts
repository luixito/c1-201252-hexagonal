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

            return "Usuario logeado";
        } catch (error) {
            return null;
        }
    }
}
