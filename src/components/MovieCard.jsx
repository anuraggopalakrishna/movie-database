import React, {useState} from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.movie_img.url} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genres.join(', ')}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Vote Average: {movie.vote_average}</p>
            <a href={`/movies/${movie._id}`}>Details</a>
        </div>
    );
};
export default MovieCard;
