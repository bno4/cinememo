/* eslint-disable react/jsx-key */
import { useState } from "react";
import ResultCard from "./ResultCard";

const Add = () => {
  const [filter, setFilter] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b7b3ec164d57a72e901bc1765d723836&query=${filter}&language=fr-FR`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              onChange={onChange}
              value={filter}
            />
          </div>
          <h1>
            {results.length > 0 && (
              <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Add;
