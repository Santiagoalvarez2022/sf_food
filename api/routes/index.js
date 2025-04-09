import { Router } from 'express';
import usersRouter from './usersRouter.js';


//main router to distribute requests to the appropriate routes;
const mainRouter = Router()

mainRouter.use('/user',usersRouter)

export default mainRouter;