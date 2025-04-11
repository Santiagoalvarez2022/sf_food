import {Router} from 'express';
import {getData, getPlacesCloseToMe} from './controllers/getData.js'

const DataSfRouter = Router()


//GET - ENVIO DE TODOS LOS LUGARES CON HABILIDATACION APROVADA Y TAMBIEN CON LA OPCION DE FILTRAR POR EL TIPO
DataSfRouter.get('/', getData)
DataSfRouter.post('/search', getPlacesCloseToMe)

export default DataSfRouter;