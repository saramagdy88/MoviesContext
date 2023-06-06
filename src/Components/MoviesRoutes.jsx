import React from "react";
import MoviesModule from "./MoviesModule";
import { Routes, Route } from "react-router-dom";
import MoviesJson from "./MoviesJson";
import UpdateMovie from "./UpdateMovie";
import AddMovie from "./AddMovie";
const MoviesRoutes = () => {
  return (
    <MoviesModule>
      <Routes>
        <Route path="showMovie" element={<MoviesJson></MoviesJson>}></Route>
        <Route path="addMovie" element={<AddMovie></AddMovie>}></Route>
        <Route path="/update/:id" element={<UpdateMovie></UpdateMovie>}></Route>
      </Routes>
    </MoviesModule>
  );
};

export default MoviesRoutes;
