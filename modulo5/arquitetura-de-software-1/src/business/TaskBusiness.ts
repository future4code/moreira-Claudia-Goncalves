import { TaskDatabase } from "../data/TaskDatabase"
import { IdGenerator } from "../services/IdGenerator"

const idGenerator = new IdGenerator()
const taskDatabase = new TaskDatabase()

export class TaskBusiness {
  createTask = async (title: string, description: string, deadline: string, authorId: string) => {
    if (
      !title ||
      !description ||
      !deadline ||
      !authorId
    ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
    }

    const id: string = idGenerator.generateId()

    await taskDatabase.insertTask({
      id,
      title,
      description,
      deadline,
      authorId,
    })
  }

  getTaskById = async (id: string) => {
    const result = await taskDatabase.getTaskById(id)
    if (!result) {
      throw new Error("Tarefa não encontrada")
    }

    const taskWithUserInfo = {
      id: result.id,
      title: result.title,
      description: result.description,
      deadline: result.deadline,
      status: result.status,
      authorId: result.author_id,
      authorNickname: result.nickname
    }
    return taskWithUserInfo
  }
}