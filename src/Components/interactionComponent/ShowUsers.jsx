import React from "react";

const ShowUsers = ({ name, age }) => {
  const objSty = {
    color: "purple",
    backgroundColor: "pink",
    margin: "10px auto",
    width: "30%",
    textAlign: "center",
    borderRadius: "10px",
    padding: "10px 0",
  };
  const spanStyle = {
    color: "rgba(216,6,161)",
  };
  return (
    <div style={objSty}>
      <h4>
        <span style={spanStyle}>Name:</span> {name}
      </h4>
      <h4>
        <span style={spanStyle}>Age:</span> {age}
      </h4>
    </div>
  );
};

export default ShowUsers;
