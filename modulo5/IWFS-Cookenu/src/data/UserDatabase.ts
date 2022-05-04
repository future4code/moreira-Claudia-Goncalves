import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User): Promise<void> {
    try {
      await BaseDatabase.connection("Users")
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
          role: user.getRole()
        })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection('Users')
        .select("email")
        .where({ email })

      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getUser(): Promise<User[]> {
    try {
      const user = await BaseDatabase.connection('Users')
        .select("id", "name", "email")
      return user.map((user => User.toUserModel(user)))

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getUserById(id: string): Promise<User[]> {
    try {
      const userById = await BaseDatabase.connection('Users')
        .select("id", "name", "email")
        .where({ id })
      return userById


    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }

  }
}