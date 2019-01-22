import axios from 'axios';

const KEY = `AIzaSyCOzAuOrEBbl82HUZWrBfB7S9-tplpk0iY`;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
