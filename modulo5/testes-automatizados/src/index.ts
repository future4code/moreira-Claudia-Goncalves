import knex from 'knex'
import { config } from 'dotenv'

config()

export const isEven = (integer: number): boolean => {
   return (integer % 2 === 0)
}

export function performPurchase(user: User, value: number): User | undefined {
   if (user.balance >= value) {
      return {
         ...user,
         balance: user.balance - value
      }
   } else {
      return undefined
   }
}

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   },
});