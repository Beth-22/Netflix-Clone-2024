import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [noTrailer, setNoTrailer] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setNoTrailer(false);

    if (trailerUrl) {
      setTrailerUrl("");
      return;
    }

    movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
      .then((url) => {
        if (!url) {
          setTrailerUrl("");
          setNoTrailer(true);
          return;
        }
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => {
        console.log("Trailer not found", error);
        setTrailerUrl("");
        setNoTrailer(true);
      });
  };

  const opts = {
    width: "100%",
    height: "500", 
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      <div className="row_trailer_fullscreen">
        {trailerUrl && (
          <YouTube
            videoId={trailerUrl}
            opts={opts}
            className="youtube_iframe"
          />
        )}
        {noTrailer && (
          <div className="no_trailer_msg">🚫 Sorry, trailer not available.</div>
        )}
      </div>
    </div>
  );
};

export default Row;
