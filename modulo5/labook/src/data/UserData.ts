import User from "../model/User";
import { FindByEmailResponse } from "../types/findByEmailResponse";
import { BaseDatabase } from "./BaseDatabase";

export class UserData extends BaseDatabase {
  private TABLE_NAME = 'labook_users'

  insert = async (user: User) => {
    try {
      await this
        .connection(this.TABLE_NAME)
        .insert(user)
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error("Erro no banco de Dados")
      }
    }
  }

  findByEmail = async (email: string) => {
    try {
      const queryResult: FindByEmailResponse = await this
        .connection(this.TABLE_NAME)
        .select()
        .where({ email })
      return queryResult[0]

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error("Erro no banco de Dados")
      }
    }
  }


  login = async (email: string) => {
    try {
      await this
        .connection(this.TABLE_NAME)
        .where({ email })
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      } else {
        throw new Error("Erro no banco de Dados")
      }
    }
  }
}