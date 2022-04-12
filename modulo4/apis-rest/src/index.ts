import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, user } from './data'

const app: Express = express();
app.use(express.json());
app.use(cors());

//Busca todos os usuários que tenham uma propriedade type específica (ADMIN ou NORMAL)
app.get('/users', (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const token = req.headers.authorization
    const type: string = req.query.type as string
    const typeUser = users.filter((user) => user.type === type)

    if (!token) {
      res.status(401).send("verifique seu token de acesso")
    }
    if ((!typeUser) || (type !== "NORMAL") && (type !== "ADMIN")) {
      codeError = 404
      throw new Error("User Type not found");
    }
    res.status(200).send(typeUser)
  } catch (err: any) {
    res.status(codeError).send(err.message)
  }
})


//Busca que encontra um usuário buscando por nome
app.get('/users/name', (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const token = req.headers.authorization
    const name: string = req.query.name as string
    const username = users.find((user) => user.name === name)

    if (!token) {
      res.status(401).send("verifique seu token de acesso")
    }
    if (!username) {
      codeError = 404
      throw new Error("User not found");
    }
    res.status(200).send(username)
  } catch (err: any) {
    res.status(codeError).send(err.message)
  }
})

// criar novo usuario
app.post('/users', (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const { id, name, email, type, age } = req.body
    const token = req.headers.authorization

    if (!token) {
      res.status(401).send("verifique seu token de acesso")
    }
    if (!id || !name || !email || !type || !age) {
      codeError = 422
      throw new Error("all data is mandatory")
    }
    const newUser = {
      id: id,
      name: name,
      email: email,
      type: type,
      age: age
    }


    users.push(newUser)
    res.status(201).send("user created successfully")
  } catch (err: any) {
    res.status(codeError).send(err.message)
  }
})
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});