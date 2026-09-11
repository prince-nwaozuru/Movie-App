import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Favorites() {
    const [favs, setFavs] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favs")) || [];
        setFavs(stored);
    }, []);

    const removeFromFavorites = (id) => {
        let updated = favs.filter(movie => movie.id !== id);
        localStorage.setItem("favs", JSON.stringify(updated));
        setFavs(updated);
    };

    return (
        <div>
            <h1>My Favorites</h1>

            {favs.length === 0 ? (
                <p>No favorites yet</p>
            ) : (
                favs.map(movie => (
                    <div
                        key={movie.id}
                        style={{ margin: "10px", cursor: "pointer" }}
                        onClick={() => navigate(`/movies/${movie.id}`)}
                    >
                        <p>{movie.title}</p>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                removeFromFavorites(movie.id);
                            }}
                        >
                            ❌ Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Favorites;