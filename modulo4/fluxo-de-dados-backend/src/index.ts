import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { produtos } from './data';

const app = express();
app.use(express.json());
app.use(cors());


//teste api
app.get("/test", (req: Request, res: Response) => {
  res.send("A api está funcionando!!!")
})

//criar novo produto
app.post("/produtos", (req: Request, res: Response) => {
  const nomeProduto = req.body.name
  const precoProduto = req.body.price

  type Produto = {
    id: string,
    name: string,
    price: number
  }

  const novoProduto: Produto = {
    id: Date.now().toString(),
    name: nomeProduto,
    price: precoProduto
  }

  // for (let i = 0; i < produtos.length; i++) {
  //   produtos.push(novoProduto)
  // }

  // [...produtos, novoProduto]

  res.send(produtos)
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;