
import { BrowserRouter, Routes ,Route } from "react-router-dom";
// import { useState } from "react";
import MovieNav from "./Components/MovieNav";
import Movies from "./Components/Movies";
import MoviesJson from "./Components/MoviesJson";
import Slider from "./Components/Slider";
import Root from "./Components/interactionComponent/Root";
import TestClass from "./Components/test_class";
import MovieHome from "./Components/MovieHome";
import AddMovie from "./Components/AddMovie";
import MoviesModule from "./Components/MoviesModule";


function App() {
  
  // const arrImg = [
  //   {url:"images/1.jpg" , alt:"image"},
  //   {url:"images/2.jpg" , alt:"image"},
  //   {url:"images/3.jpg" , alt:"image"},
  //   {url:"images/4.jpg" , alt:"image"},
  // ];
  // const styObj={
  //   margin:"0 auto" ,
  //   width:"500px" ,
  //   height:"300px" ,

  // }
  
  return (
    <div className="App">
      <BrowserRouter>
      <MovieNav></MovieNav>
      <Routes>
        <Route path="/" element={<MovieHome></MovieHome>}></Route>
        <Route path="movies/*" element={<MoviesModule></MoviesModule>}></Route>
        {/* <Route path="movies" element={ <MoviesJson></MoviesJson>}></Route>
        <Route path="addMovie" element={ <AddMovie></AddMovie>}></Route> */}
      </Routes>
      </BrowserRouter>

      {/* <MoviesJson></MoviesJson> */}


      {/* <Movies></Movies> */}
    {/* <TestClass></TestClass> */}
    {/* <Root></Root> */}
    {/* <div style={styObj}>
      <Slider slides={arrImg}></Slider> 
      </div> */}
    </div>
  );
}

export default App;
