import {User, FavoritePlaces} from '../../models/index.js';


export const getFavorites = async(req,res) =>{
    try {
        const {user} = req;
        
        let findFavorites = await FavoritePlaces.findAll({
            where : {userId : user.id},
            raw : true
        })
        
        if (findFavorites.length) {
            findFavorites = findFavorites.map(({userId,createdAt,updatedAt,...rest})=>{
                return {...rest, isFav : true}
            })
            res.status(200).json(findFavorites)
        } else {
            res.status(200).json([]) 

        }


    } catch (error) {
        console.log(error);
        
        return res.status(400).json({ error: 'Problem getting favorites places' });
    }
}