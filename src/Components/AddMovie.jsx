// import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { MoviesContext } from "./MoviesModule";
// import { useNavigate } from "react-router-dom";
// import MoviesJson from "./MoviesJson";

const AddMovie = () => {
  const { handleChange, handleSubmit } = useContext(MoviesContext);
  //   console.log(props);
  //   const { addNewMovieFun } = props;
  //   const [data, setData] = useState({
  //     title: "Dreams",
  //     director: "Jack Jone",
  //     year: "2018",
  //   });

  //   const navigate = useNavigate();
  //   const handleChange = (e) => {
  //     setData({ ...data, [e.target.name]: e.target.value });
  //     console.log(data);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // console.log(addNewMovieFun);
  //     addNewMovieFun(data);
  //     navigate(MoviesJson);
  //   };

  // Style
  const formSty = {
    textAlign: "center",
    backgroundColor: "#eee",
    width: "40%",
    margin: "20px auto",
    borderRadius: "10px",
    padding: "10px 0 30px",
  };
  const inputSty = {
    width: "40%",
    padding: "7px",
    margin: "10px 0",
    border: "0",
    borderRadius: "6px",
  };
  const btnSty = {
    width: "100px",
    height: "40px",
    outline: "0",
    border: "0",
    backgroundColor: "purple",
    color: "white",
    marginTop: "20px",
    // margin: "100px 10px 30px 90px",
    borderRadius: "10px",
    cursor: "pointer",
    // fontWeight: "bold",
    fontSize: "16px",
  };
  return (
    <div>
      <form style={formSty} onSubmit={handleSubmit}>
        <h2 style={{ color: "purple" }}>Add New Movie</h2>
        <input
          type="text"
          placeholder="Movie Title"
          style={inputSty}
          //   value={newMovie.title}
          onChange={handleChange}
          name="title"
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Movie Director"
          style={inputSty}
          //   value={newMovie.director}
          name="director"
          onChange={handleChange}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Movie Year"
          style={inputSty}
          //   value={newMovie.year}
          name="year"
          onChange={handleChange}
        ></input>
        <br></br>
        Movie Image:{" "}
        <input
          type="file"
          placeholder="Movie Img"
          name="img"
          style={inputSty}
        ></input>
        <br></br>
        <button style={btnSty}> Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
