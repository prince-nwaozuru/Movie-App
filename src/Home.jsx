import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const addToFavorites = (movie) => {
        let favs = JSON.parse(localStorage.getItem("favs")) || [];
        if (!favs.find(m => m.id === movie.id)) {
            favs.push(movie);
            localStorage.setItem("favs", JSON.stringify(favs));
        }
    };

    const searchMovies = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}`)
            .then(res => res.json())
            .then(data => setMovies(data.results || []));
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`)
            .then(res => res.json())
            .then(data => setMovies(data.results || []));
    }, []);

    return (
        <div>
            <h1>Trending Movies</h1>
            <nav>
                <button onClick={() => navigate("/")}>Home</button> |
                <button onClick={() => navigate("/favorites")}>Favorites</button>
            </nav>
            <br />
            <input
                type="text"
                placeholder="Search movies..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchMovies}>Search</button>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {movies.map(movie => (
                    <div
                        key={movie.id}
                        style={{ margin: "10px", cursor: "pointer", border: "1px solid #ccc", padding: "10px" }}
                        onClick={() => navigate(`/movies/${movie.id}`)}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <p>{movie.title}</p>
                        <button onClick={(e) => {
                            e.stopPropagation(); // Stops the click from opening the details page
                            addToFavorites(movie);
                        }}>
                            ❤️ Favorite
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;