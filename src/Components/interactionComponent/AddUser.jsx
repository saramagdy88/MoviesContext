import React, { useState } from "react";

const AddUser = ({ addUsers }) => {
  const [data, setData] = useState({ name: "Sara", age: "24" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  // prevent reload on submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    addUsers(data);
  };
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
      <form onSubmit={handleSubmit} style={formSty}>
        <h2 style={{ color: "purple" }}>Add New User </h2>
        Name:{" "}
        <input
          type="text"
          value={data.name}
          name="name"
          onChange={handleChange}
          style={inputSty}
        ></input>
        <br></br>
        Age:{" "}
        <input
          type="text"
          value={data.age}
          name="age"
          onChange={handleChange}
          style={inputSty}
        ></input>
        <br></br>
        <button style={btnSty}>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
