import {User, FavoritePlaces} from '../../models/index.js';

export const addFavoritePlaces = async(req,res) =>{
    try {
         // Get the authenticated user from the request
        const {user} = req;

        // Extract the favorite place data from the request body
        let favorite = req.body

        // Search for the user in the database by nickname
        const findUser = await User.findOne({
            where : {nickname: user.nickname}
        }) 

        // If the user doesn't exist, return a 404 error
        if (!findUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const obj = {...favorite,  userId: findUser.id}

        const newFavorite = await FavoritePlaces.create(obj);
        res.status(201).json(newFavorite)
         
    } catch (error) {
        res.status(400).json({ error: 'Problem creating a favorite places' });
    }
}