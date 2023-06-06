import React, { useContext, useState } from "react";
import { MoviesContext } from "./MoviesModule";
import { useParams } from "react-router-dom";

const UpdateMovie = () => {
  const { Movies } = useContext(MoviesContext);
  const { id } = useParams();
  const [updateMovie, setUpdateMovie] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdateMovie((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Movies.updating(id, updateMovie);

    setUpdateMovie({});
  };

  return (
    <div>
      <div className="container ">
        <h2>Update Movie</h2>
        <form onSubmit={handleSubmit}>
          <label>Movie Name</label>
          <input
            type="text"
            name="title"
            value={updateMovie.title}
            onChange={handleChange}
          />
          <label>Director</label>
          <input
            type="text"
            name="directore"
            value={updateMovie.director}
            onChange={handleChange}
          />
          <label>Year</label>
          <input
            type="text"
            name="year"
            value={updateMovie.year}
            onChange={handleChange}
          />
          <label>Image Link</label>
          <input
            type="text"
            name="poster_path"
            value={updateMovie.img}
            onChange={handleChange}
          />
          <input type="submit" value="Update Movie" />
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
