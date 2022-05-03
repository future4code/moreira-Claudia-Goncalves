import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../entities/User';

export interface AuthenticationData {
  id: string,
  role: USER_ROLES
}
export class Authenticator {
  public generate(input: AuthenticationData): string {
    const token = jwt.sign(input, "claudia", { expiresIn: "55min" })
    return token
  }
  public getTokenData(token: string): AuthenticationData {
    const data = jwt.verify(token, "claudia")
    return data as AuthenticationData
  }
}