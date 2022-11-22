import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useLocation } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const location = useLocation();

  return (
    <>
      <MovieCard title="Latest Movies & TV" pathname={location.pathname} />
    </>
  );
};

export default Home;
