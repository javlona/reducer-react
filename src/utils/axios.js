import axios from 'axios'

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 10000
})

client.interceptors.request.use(config => {
    return  config
})

client.interceptors.response.use(config => {
    return config
})

export default client;