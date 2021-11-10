import axios from 'axios';

export default axios.create({
    baseURL: 'https://todoapp-83079-default-rtdb.firebaseio.com'
})
