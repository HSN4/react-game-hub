import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'091b6b2761b14b91800c48b1d32ef4ce'
    }
})