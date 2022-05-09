import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import { HashManager } from "./services/HashManager"

app.post('/user/signup', createUser)
app.put('/user/edit', editUser)
app.post('/user/login', login)

// const cypherText = new HashManager().createHash("claudialinha")
// console.log("senha: " + cypherText)

// const passwordIsCorrect = new HashManager().compareHash("claudialinha", "$2a$12$JE3dKkn93CLS8xrxDRizZuqLnVEcWyVRGuJdQ2YwDdG4z6yRbRxh.")
// console.log("senha certa? " + passwordIsCorrect)