// import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "./MoviesModule";
import { useParams } from "react-router-dom";
import UpdateMovie from "./UpdateMovie";
// import AddMovie from "./AddMovie";

const MoviesJson = () => {
  const { Movies, deleteMovie } = useContext(MoviesContext);

  // const navigate = useNavigate();

  const buttonSty = {
    width: "58px",
    height: "40px",
    outline: "0",
    border: "0",
    backgroundColor: "purple",
    color: "white",
    marginTop: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    display: "inline-block",
    position: "absolute",
    right: "10px",
  };
  const defaultImg =
    "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg";
  return (
    <div>
      <u
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {Movies.map((movie, index) => (
          <div
            key={index}
            style={{
              margin: "20px auto",
              backgroundColor: "#eee",
              color: "purple",
              width: "30%",
              textAlign: "center",
              padding: "10px 0 50px",
              borderRadius: "10px",
              boxShadow: "8px 8px 4px #aaaaaa",
              position: "relative",
            }}
          >
            <button style={buttonSty} onClick={() => deleteMovie(movie.id)}>
              <DeleteIcon size="meduim" />
            </button>
            {/* <Link to={`movies/showMovie/update/${movie.id}`}>Update</Link> */}
            {/* <Link to={`/update/${movie.id}`}>Update</Link> */}

            <h2> Title :{movie.title}</h2>
            <h3> Director :{movie.director}</h3>
            <p style={{ color: "#333" }}>Year :{movie.year}</p>
            <img
              src={movie.image ? movie.image : defaultImg}
              alt="img"
              width="300px"
              height="200px"
            ></img>
            <br></br>
          </div>
        ))}
      </u>
    </div>
  );
};

export default MoviesJson;
