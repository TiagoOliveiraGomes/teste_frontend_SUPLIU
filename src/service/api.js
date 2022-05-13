import axios from 'axios'

export const Api = axios.create({
    baseURL: "https://tiao.supliu.com.br/api",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Tyagoogomes@gmail.com'
    }
})

// https://tiao.supliu.com.br/api
// https://jsonplaceholder.typicode.com