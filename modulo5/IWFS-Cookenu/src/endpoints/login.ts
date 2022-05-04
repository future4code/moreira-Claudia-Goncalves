import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(422).send("Todos os campos são de preenchimento obrigatório")
    }

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);

    if (!user) {
      res.status(409).send("Usuário não cadastrado")
    }

    const hashManager = new HashManager()
    const passwordIsCorrect = hashManager.compare(password, user.getPassword())
    if (!passwordIsCorrect) {
      res.status(401).send("Senha incorreta")
    }
    const authenticator = new Authenticator()
    const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

    res.status(200).send({ message: "Usuário logado com sucesso", token })

  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
}