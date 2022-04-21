import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://newsapi.org/v2'  , 
    headers : {
        "Content-Type" : 'application/x-www-form-urlencoded' , 
    } 
})

instance.interceptors.response.use(res => {
    return res 
})

export default instance

