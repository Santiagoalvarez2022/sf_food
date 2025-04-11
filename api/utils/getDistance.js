// getDistanceBetweenTwoPoints
//Well to obtain the result we must then compare each place with the chosen point, if it is within the range we chose we add it


const calculateDistance = (position, place) =>{
    //we will to use the Haversine fromula
    const R = 3958.8;//radius of the Earth
    
    //get date of the center position and the place
    const lat1 = position.lat
    const lon1 = position.lng

    const lat2 = place.lat
    const lon2 = place.lng

    const toRad = (value) => (value * Math.PI) / 180;//Convert degrees to radians beacuse we need to use Math.sin and .cos

    //We calculate the angular difference between the two coordinates in radians.
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const haversine_fromula = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    //Calculate the central angle between the two points.
    const c = 2 * Math.atan2(Math.sqrt(haversine_fromula), Math.sqrt(1 - haversine_fromula));

    //you multiply the angle (c) by the radius of the Earth
    
    return R * c;
}

const getDistance = (array, position,miles) =>{
//You calculate the distance between the chosen point and each place to keep only those that are within the circular radius
    console.log('miles recibido en el back ', miles);
    
    return array.filter((place)=>{
        let distance = calculateDistance(position,place)
        if (distance <= miles) {
            return place
        } 
    })
}

export default getDistance;