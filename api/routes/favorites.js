import { Router } from "express";
import { addFavoritePlaces } from "../controllers/FavoritePlaces/addFavoritePlaces.js";
import { getFavorites } from "../controllers/FavoritePlaces/getFavorites.js";


const favoritesPlaces = Router();

//add new favorite places 
favoritesPlaces.post('/',addFavoritePlaces)

//get all my favorite places
favoritesPlaces.get('/',getFavorites)

export default favoritesPlaces;