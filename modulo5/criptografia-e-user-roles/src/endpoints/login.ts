import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.statusCode = 422;
            throw new Error("Por favor preencha 'email' e 'senha'")
        }

        const [user] = await
            connection('to_do_list_users')
                .where({ email })

        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

        if (!user || !passwordIsCorrect) {
            res.statusCode = 401;
            throw new Error("Credenciais inválidas")
        }

        if (email.indexOf("@") === -1) {
            res.statusCode = 409
            throw new Error("Invalid email");
        }

        const authenticator: Authenticator = new Authenticator()
        const payload: authenticationData = {
            id: user.id,
            role: user.role
        }
        const token = authenticator.GenerateToken(payload)

        res.status(200).send(token)

    } catch (error) {
        if (res.statusCode === 200) {
            console.log(error)
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.end()
        }
    }
}
