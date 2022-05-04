import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getProfileById(req: Request, res: Response): Promise<void> {
  try {
    const token = req.headers.authorization;
    const id = req.params.id;

    if (!token) {
      res.status(422).send("Informe a autorização")
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserById(id)

    res.status(200).send(user)
  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
}