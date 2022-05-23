import { PostData } from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { PostInputDTO } from "../types/postinputDTO";

export class PostBusiness {
  constructor(
    private postData: PostData,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) { }

  postCreator = async (input: PostInputDTO) => {
    const { photo, description, type, token } = input

    if (!photo || !description || !type) {
      throw new Error("Todos os campos são de preenchimento obrigatório")
    }
    if (!token) {
      throw new Error("Necessário token de validação.")
    }

    const tokenData = this.authenticator.getTokenData(token)
    if (!tokenData) {
      throw new Error("Efetue login para postar")
    }
    const { id } = tokenData
    const post_id = this.idGenerator.generateId()

    const post: Post = {
      id,
      photo,
      description,
      type,
      created_at,
      author_Id: post_id
    }

    await this.postData.insertPost(post)
    return token

  }
}