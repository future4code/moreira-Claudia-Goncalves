import { Request, Response } from "express"
import { TaskBusiness } from "../business/TaskBusiness"

const taskBusiness = new TaskBusiness()


export class TaskController {
  createTask = async (
    req: Request,
    res: Response
  ) => {
    try {
      const { title, description, deadline, authorId } = req.body
      res.status(201).end()

      taskBusiness.createTask(title, description, deadline, authorId)

    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  getTaskById = async (
    req: Request,
    res: Response
  ) => {
    try {

      const { id } = req.params
      const taskWithUserInfo = taskBusiness.getTaskById(id)
      res.status(200).send(taskWithUserInfo)
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}