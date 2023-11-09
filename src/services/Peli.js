import Axios from 'axios'

const baseUrl = "https://localhost:7161/api/pelit"


// Hae kaikki pelit backendistä
const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}

// Uuden luontiin käytettävä http pyyntö
const create = (peli) => {
    const request = Axios.post(baseUrl, peli)
    return request.then(response => response)
}

// Poisto ///////////////////////////////
const remove = (id) => {
    const request = Axios.delete(baseUrl + "/" + id)
    return request.then(response => response.data)
}

export default {getAll, create, remove}
