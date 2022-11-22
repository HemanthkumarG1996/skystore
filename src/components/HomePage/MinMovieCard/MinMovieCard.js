import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MinMovieCard.css";
const MinMovieCard = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [limit, setLimit] = useState(36);
  const max = 100;
  const location = useLocation();
  const movieURL = "https://api.tvmaze.com/shows";
  const randMov = Math.floor(Math.random() * 36 + 0);
  useEffect(() => {
    fetchMovies();
    setSearchVal(location.searchVal);
  }, [location]);

  const fetchMovies = () => {
    let filter = "name";
    // let keyword = searchVal;\
    console.log("searchVal.length");
    fetch(movieURL)
      .then((res) => res.json())
      .then((response) => {
        if (searchVal.length > 0) {
          let result = response.filter(function (obj) {
            return obj[filter].startsWith(searchVal);
          });
          setMovies(result);
        } else if (searchVal.length === 0) {
          // console.log("res", searchVal.length);
          setMovies(response);
        }
        setTimeout(() => {}, 1500);
      });
  };

  const showMoreHandler = () => {
    if (limit <= max) {
      setLimit(limit + 12);
    }
  };

  const goToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const searchMovies = (e) => {
    let searchedValue = e.toUpperCase();
    setSearchVal(searchedValue);
    fetchMovies();
  };

  return (
    <>
      <div
        className={`container movie-cards-section no-mini-banners ${
          props.pathname ? "" : "no-banner"
        }`}
      >
        <h2 className={`thin-text ${props.pathname ? "no-head" : ""}`}>
          {props.title}
        </h2>
        <div className="main-box">
          {movies.slice(0, 12).map((movie, key) => {
            return (
              <div className="movie-details" key={key}>
                <div className="movie-box">
                  <Link to={`/details/${movie.id}`}>
                    <div className="image-container">
                      <img src={movie.image.medium} alt="" />
                    </div>
                  </Link>
                </div>
                <p className="movie-text">{movie.name}</p>
              </div>
            );
          })}
        </div>

        {/* Show More and Back to Top Button Container */}
        {/* <div className="relative-container btn-containers">
          <div className="btn-area text-center">
            <button
              className="text-center show-more-btn btn-medium"
              id="show-more"
              onClick={showMoreHandler}
            >
              Show more
            </button>
            <Link
              to="/"
              className="back-to-top"
              id="back-to-top"
              onClick={goToTopHandler}
            >
              <i className="fa-solid fa-circle-chevron-up"></i> Back to top
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MinMovieCard;
