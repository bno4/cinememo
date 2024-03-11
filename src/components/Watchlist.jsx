/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Films à voir</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length > 1 ? "films" : "film"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist" key={movie.id} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Pas de favoris, ajoutez-en un !</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
