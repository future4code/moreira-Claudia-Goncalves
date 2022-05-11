import { UserDatabase } from "../data/UserDatabase"
import { HashManager } from "../services/HashManager";
import { user, USER_ROLES } from "../types/user"
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from "../services/IdGenerator";

const userDB = new UserDatabase();
const hashManager = new HashManager();
const authenticator = new Authenticator();
const idGenerator = new IdGenerator();

export class UserBusiness {

  signup = async (name: string, nickname: string, email: string, password: string, role: USER_ROLES) => {
    if (
      !name ||
      !nickname ||
      !email ||
      !password ||
      !role
    ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
    }

    const id: string = idGenerator.generateId()
    const cypherPassword = await hashManager.hash(password);

    await userDB.insertUser({
      id,
      name,
      nickname,
      email,
      password: cypherPassword,
      role
    })

    const token: string = authenticator.generateToken({
      id,
      role: role
    })
    return token
  }


  login = async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error("'email' e 'senha' são obrigatórios")
    }

    const user: user = await userDB.selectUserByEmail(email)

    if (!user) {
      throw new Error("Usuário não encontrado ou senha incorreta")
    }

    const passwordIsCorrect: boolean = await hashManager.compare(password, user.password)

    if (!passwordIsCorrect) {
      throw new Error("Usuário não encontrado ou senha incorreta")
    }

    const token = authenticator.generateToken({
      id: user.id,
      role: user.role
    })

    return token;
  }


  getAllUsers = async (token: string) => {
    authenticator.getTokenData(token);
    return await userDB.getAllUsers();
  }

  deleteUser = async (id: string, token: string) => {

    const verificarToken = authenticator.getTokenData(token)
    if (!verificarToken) {
      throw new Error("Informe um token válido")
    }

    if (verificarToken.role !== "ADMIN") {
      throw new Error("Somente administradores podem executar esta ação")
    }

    return await userDB.deleteUser(id)
  }

}