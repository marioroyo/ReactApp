import axios from 'axios';

const instance = axios.create({
    
    baseURL: 'https://pedidos-8ef5d.firebaseio.com/'
});

export default instance;