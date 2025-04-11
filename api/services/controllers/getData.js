import getDistance from '../../utils/getDistance.js';
import normalicedata from '../../utils/normaliceData.js';
import api from '../apiInsatance.js';



export const getData =  async(req,res) =>{
    try {
        const {type} = req.query; 
        //the are two types 'Truck' and 'Push Cart'
        let response = []      
        console.log('entre a la peticions  ', type);
        
        if (type) {
        console.log('entre a la peticions  ', type);

            let response = await api.get(``,
                {params:{
                    facilitytype: type
                }}
            )
            console.log(response);
            
            response = normalicedata(response.data)
            res.status(200).json(response);

        } else {
        console.log('entre al else  ', type);

            response = await api.get(``)
            response = normalicedata(response.data)
            res.status(200).json(response);

        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
} 

export const getPlacesCloseToMe = async(req,res) =>{
    try {
        const {currentLocation, miles} = req.body;
        console.log(req.body);
        
        if (!currentLocation || !miles) throw Error('Incomplete data')
        
        let {data} = await api.get('')
        data = normalicedata(data)
        let result = getDistance(data,currentLocation,miles)

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

} 
