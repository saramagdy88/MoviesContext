import React, { Component } from "react";
import axios from "axios";

const imgPath = "https://image.tmdb.org/t/p/w500/";
class TestClass extends Component {
  state = {
    Movies: [],
  };
  objStyle = {
    color: "purple",
    width: "50%",
    margin: "0 auto",
    textAlign: "center",
    padding: "20px",
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7&fbclid=IwAR1zXB87RdobwkaVyHfUEWUMA37JDYoI8TZmk93_pdTz17urdAboDWT8Ul0`
      )
      .then((res) => {
        const Movies = res.data.results;
        console.log(Movies);
        this.setState({ Movies });
      });
  }

  render() {
    return (
      <div style={this.objStyle}>
        <h2>Our Movies</h2>
        <ul>
          {this.state.Movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                backgroundColor: "#EEE",
                padding: "10px",
                margin: "10px",
              }}
            >
              <h3>
                <span style={{ color: "magenta" }}> Movie Title :</span>
                {movie.original_title}
              </h3>
              <img
                src={`${imgPath}${movie.poster_path}`}
                alt="img"
                width="300"
              />

              <p>
                <span style={{ fontWeight: "bold" }}>MovieOverView : </span>
                {movie.overview}
              </p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestClass;
