import { Request, Response } from "express"
import connection from "../connection"
import { toDoListUser } from "../data"


export default function createUser(req: Request, res: Response) {
  try {
    const { id, name, nickname, email } = req.body
    toDoListUser.push({
      id,
      name,
      nickname,
      email
    })
    res.status(201).end()
  } catch (error) {
    res.status(500).send("Erro inesperado")
  }
}