import { Request, Response } from "express"
import connection from "../connection"
import { toDoListUser } from "../data"

export default function editUser(req: Request, res: Response) {

  try {
    const id = req.params.id
    const userId = toDoListUser.filter((user) => {
      return user.id === id
    })
    if (!userId) {
      return res.status(422)
    }
    res.status(200).send(userId)
  } catch (error) {
    res.status(500).send("Erro inesperado")
  }
}