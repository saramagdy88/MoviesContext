import { useState } from 'react';
import Movie from './Movie';

const Movies = () => {
    const [MovieData]= useState([
        { id:1 , name:"Big Hero" , year: 2000},
        { id:2 , name:"Luka" , year: 2010},
        { id:3, name:"The Godfather" , year: 2003},
        { id:4, name:"The Dark Knight" , year: 2006},
        { id:5, name:"Pulp Fiction" , year: 1990},
    ])
  
    return (
        <div>
            <h1 style={{color:"purple", textAlign:"center" , width:"50%" , margin:"10px auto"}}>Our Movies</h1>

            {MovieData.map((movie)=>
                <Movie key={movie.id} {...movie}></Movie>
                //<Movie id={movie.id} name={movie.name} year={movie.year}></Movie> 
           )}
        </div>
    );
};

export default Movies;