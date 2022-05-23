import Post from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostData extends BaseDatabase {

  private TABLE_NAME = 'labook_posts'

  insertPost = async (post: Post) => {

    try {
      await this
        .connection(this.TABLE_NAME)
        .insert(post)

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error("Erro no banco de Dados")
      }
    }
  }
}
