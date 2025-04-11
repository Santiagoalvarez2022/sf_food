import { Router } from "express";
import { createUser } from "../controllers/User/index.js";
const usersRouter = Router();


//POST - route to create new users
usersRouter.post('/create',createUser)

export default usersRouter;