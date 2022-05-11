import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness";

const userBusiness = new UserBusiness();

export class UserController {

  signup = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { name, nickname, email, password, role } = req.body
      const token = await userBusiness.signup(name, nickname, email, password, role)
      res
        .status(201)
        .send({ message: "Usuário criado com sucesso!", token })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  login = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { email, password } = req.body
      const token = await userBusiness.login(email, password)

      res.send({
        message: "Usuário logado!", token
      })

    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }


  getAllUsers = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {

      const token = req.headers.authorization!;
      const users = await userBusiness.getAllUsers(token);

      res.send(users).status(200);

    } catch (error: any) {
      res.send({ message: error.message }).status(error.status);
    }
  }

  deleteUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const id = req.params.id
      const token = req.headers.authorization!
      await userBusiness.deleteUser(id, token);

      res.send({ message: "Usuário apagado com sucesso!" }).status(200);

    } catch (error: any) {
      res.send({ message: error.message }).status(error.status);
    }
  }

}

