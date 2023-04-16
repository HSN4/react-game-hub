import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'1fefb4a64709486dac6718b197c37a1f'
    }
})