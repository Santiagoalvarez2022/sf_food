import {Router} from 'express';
import {getData, getPlacesCloseToMe} from './controllers/getData.js'

const DataSfRouter = Router()

// GET /data
// Returns all approved food facility locations.
// If a `type` query parameter is provided (e.g., 'Truck' or 'Push Cart'),
// it filters the results by that facility type.
DataSfRouter.get('/', getData)

// POST route /data/search
// Accepts user location data (latitude and longitude) in the request body.
// Returns food facility locations that are closest to the given location.
DataSfRouter.post('/search', getPlacesCloseToMe)

export default DataSfRouter;