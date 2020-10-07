import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response) => response.data;

const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post:(url, body) => axios.post(url, body).then(responseBody)
}

const NeverHaveIEver = {
    list: () => requests.get('/neverhaveiever')
}

export default {
    NeverHaveIEver
}