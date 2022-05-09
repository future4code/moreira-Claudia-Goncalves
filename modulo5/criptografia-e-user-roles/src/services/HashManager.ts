import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import dotenv from 'dotenv'

dotenv.config()
export class HashManager {
  createHash = (plaintext: string): string => {
    const rounds: number = Number(process.env.COST)
    const salt: string = genSaltSync(rounds) // string aleatória
    const cypherText: string = hashSync(plaintext, salt)
    return cypherText
  }

  compareHash = (plaintext: string, hash: string): boolean => {
    return compareSync(plaintext, hash)
  }
}