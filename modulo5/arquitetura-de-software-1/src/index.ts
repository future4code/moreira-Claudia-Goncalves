import { app } from "./controller/app"
import { UserController } from "./controller/UserController"
import { TaskController } from "./controller/TaskController"

const userController = new UserController()
const taskController = new TaskController()

app.post('/user/signup', userController.signup)
app.post('/user/login', userController.login)
app.get('/user/all', userController.getAllUsers)
app.delete('/user/:id', userController.deleteUser)

app.put('/task', taskController.createTask)
app.get('/task/:id', taskController.getTaskById)

