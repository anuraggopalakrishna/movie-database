import React, { useEffect, useState } from 'react';

const MovieDetailsPage = ({ movieId }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`/api/movies/${movieId}`);
                const data = await response.json();
                setMovie(data.movie);
            } catch (error) {
                console.error(`Error: ${error.message}`);
            }
        };
        fetchMovie();
    }, []);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="container">
            <h1>{movie.title}</h1>
            <div className="movie-details">
                <img src={movie.movie_img.url} alt={movie.title} />
                <div className="movie-info">
                    <p>Genre: {movie.genres.join(', ')}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Vote Average: {movie.vote_average}</p>
                    <p>Vote Count: {movie.vote_count}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsPage;
