import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api', 
    params:{
        key : '301c7e0052f04d8886d417978d8a6293'
    }
})