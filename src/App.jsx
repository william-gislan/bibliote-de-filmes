import axios from "axios";
import { useState, useEffect } from "react";



export default function App() {
  const [film, setFilm] = useState([]);
  const [filName, setFilmName] = useState("");
  const [loading, setLoading] = useState(true);
  
/*https://api.themoviedb.org/3/movie/top_rated?api_key=f3238878f16c928a10f0c4118e1cedfa&language=pt-US&page=1*/


  const request = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f3238878f16c928a10f0c4118e1cedfa&include_adult=false&language=pt-US&page=1&query=${filName}`);
      console.log(response.data);
      setFilm(response.data.results);
      setFilmName("");
    } catch (error) {
        console.log(error.messsage);
    } finally {
      setLoading(false);
    }
  };


  /*const showDetails = async (name) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f3238878f16c928a10f0c4118e1cedfa&include_adult=false&language=pt-US&page=1&query=${name}`);
      const
    } catch () {
      
    }
  }
*/
  const requestTwo = async () => {

    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=f3238878f16c928a10f0c4118e1cedfa&language=pt-US&page=1');
      console.log(response.data);
      setFilm(response.data.results);
    } catch (error) {
        console.log(error.messsage);
    } finally {
      setLoading(false);
    }
  };

 useEffect(() => {
    requestTwo();
  }, []);
  
  return(
    <div className="container">
      <div className="header">
        <h1>MoviesLib</h1>
        <form onSubmit={request}>
          <input type="text" name="nameFilme" id="nameFilm" value={filName} onChange={(n) => setFilmName(n.target.value)} />
          <button type="submit">Buscar filme</button>
        </form>
      </div>
      
        
          <div className="content">
            {film.map(fi => {
              return(
                <div key={fi.id} className="listFilms">
                  <img src={`https://image.tmdb.org/t/p/w500${fi.poster_path}`} alt="" />
                  <h3>{fi.original_title}</h3>
                  <button className="btnDetails">Detalhes</button>
                </div>
              )
            })}
          </div>
    </div>
  );
};