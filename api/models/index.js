import User from "./User.js";
import FavoritePlaces from "./FavoritesPlaces.js";

//assosiations models 
//Each User have to oportunity to associate with many places
User.hasMany(FavoritePlaces,{
    foreignKey:'userId',
    onDelete:'CASCADE'
});

FavoritePlaces.belongsTo(User,{
    foreignKey:'userId'
})


export {
    User,
    FavoritePlaces
} 
 
