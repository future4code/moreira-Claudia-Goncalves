import { STATUS, toDoListTasks, toDoListUsers } from "./Types"

export const toDoListUser: toDoListUsers[] = [
  {
    id: "1",
    name: "Claudia",
    nickname: "Dinha",
    email: "dinha@email.com"
  },
  {
    id: "2",
    name: "Adriano",
    nickname: "Adria",
    email: "Adria@email.com"
  }
]

export const toDoListTask: toDoListTasks[] = [
  {
    id: "1",
    title: "Lavar",
    description: "lavar roupas da semana",
    status: STATUS.TODO,
    limit_date: "2022-05-01",
    creator_user_id: "02"
  },
  {
    id: "2",
    title: "Cozinhar",
    description: "Fazer o almoço",
    status: STATUS.TODO,
    limit_date: "2022-05-07",
    creator_user_id: "01"
  }
]

export const TodoListResponsibleUserTaskRelation = [
  {
    task_id: "1",
    responsible_user_id: "1"
  }
]