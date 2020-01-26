import axios from 'axios';

const KEY='AIzaSyDJeOns1Vg9Tmserfc2KgEI28CtPvZW9Wg';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
