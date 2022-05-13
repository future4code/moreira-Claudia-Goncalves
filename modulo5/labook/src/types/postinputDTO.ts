export enum POST_TYPES {
  NORMAL = "NORMAL",
  EVENT = "EVENT"
}

export type PostInputDTO = {
  photo: string
  description: string
  type: POST_TYPES
  token: string
}