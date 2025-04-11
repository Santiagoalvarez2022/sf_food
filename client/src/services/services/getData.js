import api from "../apiInstance";

//objetngo todos los lugares de comida 

export const getData  = async(type='') =>{
    console.log('detalladata, type ', type );
  try {
    if (type) {
      console.log('entre aca type');
      
      const response = await api.get(`/data?type=${type}`)
      return response
    } else {
        const response = await api.get('/data')
        return response
    }

  } catch (error) {
    throw error.response?.data || { error: "Error in get data" }
  }
}



export const getPlacesNear  = async(currentLocation,miles) =>{
  try {
    if (!miles) throw Error('Error  incompleted')
    const response = await api.post(`/data/search`, {currentLocation,miles})
    return response;

  } catch (error) {
    throw error.response?.data || { error: "Error in search places" }
  }
}
