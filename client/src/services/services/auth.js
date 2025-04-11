import api from "../apiInstance";

export const signUp = async(form) =>{
    try {
        if (!form.nickname || !form.password) throw Error('Incomplete data provided.')
        return await api.post('/user/create', form)
    } catch (error) {
        throw error.response?.data || { error: "Error in sign up" }
    }
} 

export const logIn = async(form) =>{
    try {
        if (!form.nickname || !form.password) throw Error('Incomplete data provided.')
        return await api.post('/user/login', form, {
            withCredentials: true 
          })
    } catch (error) {
        throw error.response?.data || { error: "Error in Log In" }
    }
}

export const logOut = async(place) =>{
    try {
      const response = await api.post('/user/logout',{},{
        withCredentials: true 
      })
      return response;
    } catch (error) {
      throw error.response?.data || { error: "Error in get favorites places" }
    }
  }