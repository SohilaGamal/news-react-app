import axios from './axiosConfig';

export default () => {

    const options =
    {
        url: `/top-headlines?country=us&category=business&apiKey=b07798583b1c4ef7b720fdbd3483f8b6`,
        method: "GET"
    }


    return (
        axios(options)
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err)
            })

    )
} 
