import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../types/postinputDTO";

export class PostController {
  constructor(
    private postBusiness: PostBusiness
  ) { }

  postCreator = async (req: Request, res: Response) => {
    // const { photo, description, type } = req.body;
    const token: string = req.headers.authorization as string

    const input: PostInputDTO = {
      photo: req.body.photo,
      description: req.body.description,
      type: req.body.type,
      token
    }

    try {
      await this.postBusiness.postCreator(input)

      res.status(201).send({ message: "Post criado com sucesso!" })
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message)
      }
      res.status(500).send("Erro no signup")
    }
  }
}