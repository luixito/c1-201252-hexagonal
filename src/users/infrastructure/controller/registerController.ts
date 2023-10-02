import { Request, Response } from "express";
import { RegisterUseCase } from "../../application/registerUseCase";
import { v4 as uuid } from "uuid";

export class RegisterController {

    constructor(readonly register: RegisterUseCase) { }

    async run(req: Request, res: Response) {
        try {
            let {
                name,
                lastName,
                tel,
                email,
                password,
            } = req.body

            const newUuid: string = uuid()
            const status = true

            let createdUser = await this.register.run(
                newUuid,
                name,
                lastName,
                email,
                tel,
                password,
                status
            )

            if (createdUser) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        createdUser
                    },
                    message: "user created succefuly"
                });
            }

            res.status(400).send({
                status: "error",
                message: "Asegurese de llenar todos los datos"
            });
        } catch (error) {
            return null;
        }
    }

}