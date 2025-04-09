import { Router } from "express";
import { CreateUser } from "../controllers/User/index.js";
const usersRouter = Router();


//POST - route to create new users
usersRouter.post('/create',CreateUser)

export default usersRouter;