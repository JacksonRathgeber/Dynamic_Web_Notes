import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID 4mRO7YdLHs0z5VJYp-vFrv27fcNQOnhOQpBpv0WWJhY`
        },
        params: {
            query: 'chickens'
        }
    });
    //console.log(response.data.results);
    return response.data.results;
};

export default searchImages;
