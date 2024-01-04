import axios from "axios"

let baseUrl = "https://studies.cs.helsinki.fi/restcountries/"

const GetAll= () =>{
    return axios.get(baseUrl+"api/all").then(response=>response.data)
}

export default {GetAll}