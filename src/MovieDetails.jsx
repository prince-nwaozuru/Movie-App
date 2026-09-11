import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
    const { id } = useParams(); // It's grabbing the ID from the url  
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Fetches specific movie details using the ID [cite: 12, 28]
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
            .then((res) => res.json())
            .then((data) => setMovie(data));
    }, [id]);

    if (!movie) return <p>Loading movie details...</p>;

    return (
        <div style={{ padding: "20px" }}>
            <Link to="/">Back to Home</Link>
            <h1>{movie.title}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
            />
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
            <p>{movie.overview}</p>
        </div>
    );
}

export default MovieDetails;