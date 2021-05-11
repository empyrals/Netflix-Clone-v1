import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchMovie = async () => {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    };
    fetchMovie();
  }, [fetchUrl]);
  //   console.log(movies);

  return (
    <div className="movie__container">
      {/* <div className="single__movie"> */}
      <h2 className="title">{title}</h2>
      <div className="single__movie">
        {movies.map((movie) => {
          return (
            <>
              <img
                key={movie.id}
                className={`movie__img ${isLarge && "movieImg__large"}`}
                src={`${baseUrl}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
              />
            </>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Row;
