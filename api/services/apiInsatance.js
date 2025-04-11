import axios from 'axios';

console.log(process.env.API_DATA_SF);

const api = axios.create({
    baseURL: process.env.API_DATA_SF,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        status: 'APPROVED',
        $select: 'objectid,applicant,facilitytype,address,fooditems,latitude,longitude',
       
    },
})

export default api