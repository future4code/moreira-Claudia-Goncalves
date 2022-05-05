import app from "./app";
import { getProfile } from "./endpoints/getProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";
import { getProfileById } from "./endpoints/getProfileById";


app.post('/signup', signup)
app.post('/login', login)
app.get('/profile', getProfile)
app.get('/profile/:id', getProfileById)