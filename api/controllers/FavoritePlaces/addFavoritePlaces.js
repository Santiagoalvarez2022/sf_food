import {User, FavoritePlaces} from '../../models/index.js';

export const addFavoritePlaces = async(req,res) =>{
    try {
        const {user} = req;

        let favorite = req.body
        console.log('favorite ', favorite);
        
        const findUser = await User.findOne({
            where : {nickname: user.nickname}
        }) 

        if (!findUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        const obj = {...favorite,  userId: findUser.id}
        console.log('obj  ', obj);
        
        const newFavorite = await FavoritePlaces.create(obj);
        console.log('newFaborite ', newFavorite);
        
        res.status(201).json(newFavorite)
         
    } catch (error) {
        console.log(error); 
        
        return res.status(400).json({ error: 'Problem creating a favorite places' });
    }
}