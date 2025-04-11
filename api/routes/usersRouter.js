import { Router } from "express";
import { createUser, loginUser, logOut } from "../controllers/User/index.js";


const usersRouter = Router(); 

// POST /user/create
// Route to register a new user
// Expects user data in the request body (nickname, password)
usersRouter.post('/create', createUser);

// POST /user/login
// Route to authenticate a user and return a token 
// Expects credentials (nickname and password) in the request body
usersRouter.post('/login', loginUser);

// POST /user/logout
// Route to log out the user out and clear the token
usersRouter.post('/logout', logOut);


export default usersRouter;