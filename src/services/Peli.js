import Axios from 'axios'

const baseUrl = "https://localhost:7161/api/pelit"


// Hae kaikki pelit backendistä
const getAll = () => {
    const request = Axios.get(baseUrl)
    return request.then(response => response.data)
}

export default {getAll}
