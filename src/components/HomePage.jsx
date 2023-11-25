import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';

const Homepage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                console.log('Fetching movies')
                const response = await fetch('/api/movies');
                
                //console.log(response);
                //header("Content-Type: application/json; charset=UTF-8")
                const contentType = response.headers.get('content-type');
                console.log('Content-Type: ' + contentType)
                // returns 'text/html'

                const data = await response.json();
                setMovies(data.movies);
            } catch (error) {
                console.error(`Error: ${error.message}`);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="container">
            <h1>Movies</h1>
            <div className="grid">
                {movies.map((movie) => (
                    <MovieCard key={movie._id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;
