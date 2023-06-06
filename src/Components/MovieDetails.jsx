import React, { useContext } from "react";
import { MoviesContext } from "./MoviesModule";
import { useEffect, useParams } from "react";

const MovieDetails = () => {
  const { newMoive, handleDetail } = useContext(MoviesContext);
  const { id } = useParams();
  useEffect(() => {
    handleDetail(id);
  }, [handleDetail, id]);
  return <div>{newMoive && <div>{...newMoive}</div>}</div>;
};

export default MovieDetails;
