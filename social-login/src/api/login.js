import axios from 'axios';

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        Authorization: 'Client-ID qMngsMx8oWyVG4ZWNLQj0Ai21uEyhlYJHOOWd8FQtME'
    }
});