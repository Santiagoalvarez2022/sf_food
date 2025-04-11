import { Router } from "express";
import { addFavoritePlaces } from "../controllers/FavoritePlaces/addFavoritePlaces.js";
import { getFavorites } from "../controllers/FavoritePlaces/getFavorites.js";


const favoritesPlaces = Router();


// POST /favorites
// Adds a new favorite place for the authenticated user
favoritesPlaces.post('/', addFavoritePlaces);

// GET /favorites 
// get all favorite places for the authenticated user
favoritesPlaces.get('/', getFavorites);

export default favoritesPlaces;