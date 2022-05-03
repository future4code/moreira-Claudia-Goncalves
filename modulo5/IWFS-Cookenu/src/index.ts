import app from "./app";
import { signup } from "./endpoints/signup";

//cadastrar usuario
app.post('/signup', signup)