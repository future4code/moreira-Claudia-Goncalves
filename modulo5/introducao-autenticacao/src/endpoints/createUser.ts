import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      if (password.length < 7) {
         res.statusCode = 409
         throw new Error("Invalid password");
      }

      if (email.indexOf("@") === -1) {
         res.statusCode = 409
         throw new Error("Invalid email");
      }

      let idGenerator = new IdGenerator()
      const id: string = idGenerator.generateId()

      const newUser: user = { id, name, nickname, email, password }

      await connection('to_do_list_users')
         .insert(newUser)

      const authenticator: Authenticator = new Authenticator()
      const payload: authenticationData = {
         id: newUser.id
      }
      const token = authenticator.GenerateToken(payload)
      res.status(201).send({ token })

   } catch (error: any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}