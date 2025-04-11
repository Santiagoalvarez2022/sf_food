import {FavoritePlaces} from '../../models/index.js';


export const getFavorites = async(req,res) =>{
    try {
       // Get the authenticated user from the request
       const {user} = req;
        
       // Find all favorite places associated with the user's ID
       let findFavorites = await FavoritePlaces.findAll({
           where : {userId : user.id},
           raw : true
       })

        // If favorites are found
        if (findFavorites.length) {
            // Remove userId, createdAt, and updatedAt from each result
            // and add an 'isFav' property set to true
            findFavorites = findFavorites.map(({userId,createdAt,updatedAt,...rest})=>{
                return {...rest, isFav : true}
            })

            // If no favorites found, return an empty array
            res.status(200).json([]) 


        } else {
            res.status(200).json([]) 

        }


    } catch (error) {
       res.status(400).json({ error: 'Problem getting favorites places' });
    }
}