import { Router } from 'express';
import usersRouter from './usersRouter.js';
import DataSfRouter from '../services/DataSfRouter.js';

//main router to distribute requests to the appropriate routes;
const mainRouter = Router()
mainRouter.use('/user', usersRouter)
mainRouter.use('/data',DataSfRouter)


export default mainRouter;