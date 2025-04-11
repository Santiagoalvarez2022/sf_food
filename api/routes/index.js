import { Router } from 'express';
import usersRouter from './usersRouter.js';
import favoritesRouter from './favorites.js';
import DataSfRouter from '../services/DataSfRouter.js';
import verifyToken from '../middleware/verifyToken.js';

// Main router: delegates incoming requests to specific route modules based on the path
const mainRouter = Router();

// Handles user authentication and account routes
mainRouter.use('/user', usersRouter);     
// Handles requests to external SF Data API
mainRouter.use('/data', DataSfRouter);    
// Manages user favorites (protected by token middleware)         
mainRouter.use('/favorites', verifyToken, favoritesRouter); 



export default mainRouter;