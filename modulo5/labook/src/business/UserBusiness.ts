import { UserData } from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignupInputDTO } from "../types/signupInputDTO";



export class UserBusiness {
  //injeçao de dependencias
  constructor(
    private userData: UserData,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) { }

  signup = async (input: SignupInputDTO) => {
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new Error("Todos os campos são de preenchimento obrigatório")
    }

    if (password.length < 6) {
      throw new Error("A senha precisa ter no mínimo 6 caracteres")
    }

    if (email.indexOf("@") === -1) {
      throw new Error("Informe um email válido")
    }

    const registeredUser = await this.userData.findByEmail(email)
    if (registeredUser) {
      throw new Error("Usuário já cadastrado!")
    }

    const id: string = this.idGenerator.generateId()
    const hashedPassword = await this.hashManager.hash(password)

    const user = new User(
      id,
      name,
      email,
      hashedPassword
    )

    await this.userData.insert(user)

    const token = this.authenticator.generateToken({ id })
    return token
  }

  login = async (input: LoginInputDTO): Promise<string> => {
    const { email, password } = input;

    if (!email || !password) {
      throw new Error("Todos os campos são de preenchimento obrigatório")
    }

    if (email.indexOf("@") === -1) {
      throw new Error("Informe um email válido")
    }

    const user = await this.userData.findByEmail(email)
    if (!user) {
      throw new Error("Dados inválidos")
    }


    const passwordIsCorrect: boolean = await this.hashManager.compare(password, user.password)
    if (!passwordIsCorrect) {
      throw new Error("Dados inválidos")
    }

    const token = this.authenticator.generateToken({ id: user.id })
    return token


  }
}
