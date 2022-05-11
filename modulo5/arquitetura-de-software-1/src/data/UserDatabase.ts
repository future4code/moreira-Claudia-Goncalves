import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  insertUser = async (
    user: user) => {
    await this.connection.insert({
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email,
      password: user.password,
      role: user.role
    }).into('User_Arq')
  }

  selectUserByEmail = async (
    email: string
  ): Promise<user> => {
    try {
      const result = await this.connection("User_Arq")
        .select("*")
        .where({ email })

      return {
        id: result[0].id,
        name: result[0].name,
        nickname: result[0].nickname,
        email: result[0].email,
        password: result[0].password,
        role: result[0].role
      }

    } catch (error: any) {
      throw new Error(error.slqMessage || error.message)
    }
  }

  getAllUsers = async (): Promise<void> => {
    try {
      const users: any = [];
      const result = await this.connection()
        .select("*")
        .from('User_Arq');

      for (let user of result) {
        users.push(user);
      }

      return users;

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  deleteUser = async (id: string): Promise<void> => {
    await this.connection()
      .where({ id })
      .from('User_Arq')
      .del()
  }
}