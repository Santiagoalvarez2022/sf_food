import api from "../apiInstance";

//objetngo todos los lugares de comida 

export const getData  = async(type='') =>{
  try {
    if (type) {
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



export const getPlacesNear  = async(currentLocation,miles=1) =>{
  try {
    if (!miles) throw Error('Error  incompleted')
    console.log('esto es miles en el backend', miles);

    const response = await api.post(`/data/search`, {currentLocation,miles})
    return response;

  } catch (error) {
    throw error.response?.data || { error: "Error in search places" }
  }
}

export const getListFav = async() =>{
  try {
    const response = await api.get(`/favorites`, {
      withCredentials: true 
    });

    return response;

  } catch (error) {
    console.log(error);
    
    throw error.response?.data || { error: "Error in get favorites places" }
  }
}

export const addFavorite = async(place) =>{
  try {
    if(!place) throw Error('Place is undefined')
    const response = await api.post('/favorites',place,{
      withCredentials: true 
    })
    return response;
  } catch (error) {
    console.log(error);
    
    throw error.response?.data || { error: "Error in get favorites places" }
  }
}

