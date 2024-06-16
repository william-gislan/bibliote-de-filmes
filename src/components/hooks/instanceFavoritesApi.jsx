import { useEffect, useState } from "react";


export default function instaceFavorites({url, method, instance}){
    const [film, setFilm] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await instance[method](url);
                console.log(response.data);
                setFilm(response.data.results);
              } catch (error) {
                  console.log(error.messsage);
                  setError(error.messsage);
              } finally {
                setLoading(false);
              }
        };
        fetchApi();
    });
    {film, loading, error};
};