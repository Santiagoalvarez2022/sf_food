
const normalicedata = (array) =>{
    //This function normalizes the response from the external API to match what the frontend requires, changing the latitude and longitude properties to lat and lng respectively and their values ​​to float.

    return array.map(({latitude,longitude,fooditems,...rest})=>{
        if (fooditems) {
            fooditems = fooditems.split(':').map(e=>e.trim())
        }
        return {
            ...rest,
            fooditems,
            lat : parseFloat(latitude),
            lng : parseFloat(longitude)
        }
})

}

export default normalicedata;