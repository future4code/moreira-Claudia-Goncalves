export type toDoListUsers = {
  id: string,
  name: string,
  nickname: string,
  email: string
}
export enum STATUS {
  TODO = "to_do",
  DOING = "doing",
  DONE = "done"
}

export type toDoListTasks = {
  id: string,
  title: string,
  description: string,
  status: STATUS,
  limit_date: string,
  creator_user_id: string
}