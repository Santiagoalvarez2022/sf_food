import { Router } from 'express';
import usersRouter from './usersRouter.js';
import favoritesRouter from './favorites.js';
import DataSfRouter from '../services/DataSfRouter.js';
import verifyToken from '../middleware/verifyToken.js';

//main router to distribute requests to the appropriate routes;
const mainRouter = Router()
mainRouter.use('/user', usersRouter)
mainRouter.use('/data',DataSfRouter)
mainRouter.use('/favorites',verifyToken,favoritesRouter)


export default mainRouter;