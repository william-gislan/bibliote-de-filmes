import axios from "axios";


const apiFavorites = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/top_rated?api_key=f3238878f16c928a10f0c4118e1cedfa&language=pt-US&page=1'
});


export default apiFavorites;