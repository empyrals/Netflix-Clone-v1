import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./request";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetch = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //   console.log(request.data.results[2]);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetch();
  }, []);

  const trimDesc = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  //   console.log(trimDesc("Helloh how are you", 5));

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${baseUrl}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "100% 448px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h1 className="banner__title">{movie?.name}</h1>
        <div className="btn__container">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <div className="desc">
          <p>{trimDesc(movie?.overview, 150)}..</p>
        </div>
        {/* desc */}
      </div>
      <div className="banner__gradient"></div>
    </header>
  );
};

export default Banner;
