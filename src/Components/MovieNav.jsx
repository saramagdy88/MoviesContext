import React from "react";
import { Link } from "react-router-dom";

const MovieNav = () => {
  const linkSty = {
    textDecoration: "none",
    color: "purple",
    fontWeight: "bold",
    fontSize: "18px",
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#eee",
          textAlign: "center",
          textDecoration: "none",
          height: "80px",
        }}
      >
        <Link to="/" style={linkSty}>
          Home
        </Link>
        <Link to="movies/showMovie" style={linkSty}>
          {" "}
          Our Movies
        </Link>
        <Link to="movies/addMovie" style={linkSty}>
          {" "}
          Add Movie
        </Link>
      </div>
    </div>
  );
};

export default MovieNav;
