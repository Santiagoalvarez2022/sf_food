import { Router } from "express";
import { createUser, loginUser, logOut } from "../controllers/User/index.js";


const usersRouter = Router(); 


//POST - route to create new users
usersRouter.post('/create',createUser)
usersRouter.post('/login',loginUser)
usersRouter.post('/logout',logOut)



export default usersRouter;