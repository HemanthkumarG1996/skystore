import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Details.css";
const Details = (props) => {
  const [movie, setMovie] = useState([]);

  let { id } = useParams();
  let movie_id = parseInt(id);
  const movieURL = "https://api.tvmaze.com/shows";

  useEffect(() => {
    fetchMovie(movie_id);
  }, [movie_id]);

  const fetchMovie = (id) => {
    fetch(movieURL + "/" + id)
      .then((res) => res.json())
      .then((response) => {
        setMovie(response);
      });
  };

  var regex = /(<([^>]+)>)/gi;

  return (
    <>
      {movie.length !== 0 ? (
        <div
          className={`container movie-cards-section no-mini-banners ${
            props.pathname ? "" : "no-banner"
          }`}
        >
          <div className="single-movie-section">
            {console.log(movie)}
            <div className="row">
              <div className="col-md-3">
                <div className="movie-desc-image">
                  <img
                    src={movie.image.original}
                    alt="movie"
                    className="img-fluid detail-movie"
                  />
                  <Link to="/show">
                    <p className="trailer-text">
                      <span>
                        <i class="fa-solid fa-play"></i>
                      </span>{" "}
                      Trailer
                    </p>
                  </Link>
                </div>
              </div>

              <div className="col-md-9">
                <h2 className="movie-title">{movie.name}</h2>
                <ul className="movie-meta-detals">
                  <li className="smal_text movie-meta-details__text">
                    {movie.premiered}
                  </li>
                  <li className="smal_text movie-meta-details__text">
                    {movie.runtime} mins.
                  </li>
                  <li className="smal_text movie-meta-details__text">
                    Cert. PG
                  </li>
                </ul>
                <div className="movie-info">
                  <p className="movie-info-text">
                    {movie.summary.replace(regex, "")}
                  </p>
                </div>
                <p className="small-info">Contains mature themes, violence.</p>

                <div className="movie-desc">
                  {/*  */}
                  <div className="row super-info">
                    <div className="col-md-2">
                      <p>Cast: </p>
                    </div>
                    <div className="col-md-10">
                      <p className="sub-info actors">
                        <Link to="/">Jude Law</Link>
                        <Link to="/">Eddie Redmayne</Link>
                        <Link to="/">Dan FoglerMads </Link>
                        <Link to="/">Mikkelsen</Link>
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="row super-info">
                    <div className="col-md-2">
                      <p>Directors: </p>
                    </div>
                    <div className="col-md-10">
                      <p className="sub-info director">
                        <Link to="/">Jude Law</Link>
                      </p>
                    </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="row super-info">
                    <div className="col-md-2">
                      <p>Genre: </p>
                    </div>
                    <div className="col-md-10">
                      <p className="sub-info director">
                        {movie.genres.map((genre) => {
                          return (
                            <>
                              <Link to="/">{genre}</Link>
                            </>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Details;
