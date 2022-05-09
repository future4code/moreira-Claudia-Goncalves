export type authenticationData = {
   id: string
   role: USER_ROLES
}

export enum USER_ROLES {
   ADMIN = "ADMIN",
   NORMAL = "NORMAL",
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: USER_ROLES
}