import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-f9ec6-default-rtdb.firebaseio.com/'
});
export default instance;