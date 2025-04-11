import { Router } from "express";
import { createUser, loginUser } from "../controllers/User/index.js";


const usersRouter = Router();


//POST - route to create new users
usersRouter.post('/create',createUser)
usersRouter.post('/login',loginUser)


export default usersRouter;