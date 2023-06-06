import React from 'react';

const Movie = (props) => {
   let objStyle={ color:"magenta" , width:"50%", margin:"10px auto"
    , textAlign:"center" ,fontWeight:"bold", fontSize:"17px" ,backgroundColor:"#eee" ,height:"50px" ,paddingTop:"15px" }
    return (
        <div>
          <div style={objStyle}>
          <span style={{color:"purple"  ,margin:"10px"}}> Movie Id :  </span>  {props.id}  ,  
           <span style={{color:"purple" ,margin:" 10px"}} > Movie Name :</span>   {props.name} ,
          <span style={{color:"purple"  ,margin:"10px"}}> Movie Year :  </span>  {props.year} .  
          </div >
        </div>
    );
};

export default Movie;