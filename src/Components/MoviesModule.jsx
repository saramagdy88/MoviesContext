import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import AddMovie from "../Components/AddMovie";
import MoviesJson from "../Components/MoviesJson";
import UpdateMovie from "./UpdateMovie";

export const MoviesContext = createContext();

const MoviesModule = () => {
  //Show Movies
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/Movies").then((res) => {
      setMovies(res.data);
    });
  }, []);
  //   if (!Movies) {
  //     return <div>loading ...</div>;
  //   }

  //   Add Movie
  const [newMovie, setNewMovie] = useState({});
  const navigate = useNavigate();

  const addNewMovie = () => {
    axios.post("http://localhost:3000/Movies", newMovie);
    setMovies(() => [...Movies, newMovie]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
    console.log(newMovie);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(addNewMovieFun);
    addNewMovie();
    navigate("../movies/showMovie");
    setNewMovie({});
    console.log(newMovie);
  };

  // Movies

  //Delete
  const deleteMovie = (id) => {
    axios.delete(`http://localhost:3000/Movies/${id}`).then((res) => {
      //   console.log(res);
    });
    setMovies((data) => {
      data.filter((movie) => movie.id !== id);
    });
    // e.target.parentNode.remove();
  };

  //Details:
  const handleDetail = (id) => {
    setMovies(Movies.find((movie) => +movie.id === +id));
    axios.get(`http://localhost:3000/Movies/${id}`);
    navigate(`/detail/${id}`);
  };
  return (
    <MoviesContext.Provider
      value={{
        Movies,
        newMovie,
        deleteMovie,
        handleChange,
        handleSubmit,
        handleDetail,
      }}
    >
      <Routes>
        <Route path="showMovie" element={<MoviesJson></MoviesJson>}></Route>
        <Route path="addMovie" element={<AddMovie></AddMovie>}></Route>
        <Route path="update/:id" element={<UpdateMovie></UpdateMovie>}></Route>
      </Routes>
      {/* {children} */}
    </MoviesContext.Provider>
  );
};

export default MoviesModule;
