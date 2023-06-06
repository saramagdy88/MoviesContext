import React, { useState } from "react";
import AddUser from "./AddUser";
import ShowUsers from "./ShowUsers";

const Root = () => {
  const [usersArr, setUsers] = useState([
    { name: "Sara", age: 24 },

    { name: "Aya", age: 28 },

    { name: "Ahmed", age: 27 },

    { name: "Ali", age: 13 },
  ]);
  const addUsers = (userData) => {
    setUsers([...usersArr, userData]);
  };
  const objSty = {
    color: "gray",
    backgroundColor: "pink",
    margin: "0 auto",
    width: "50%",
    textAlign: "center",
  };
  return (
    <div>
      <AddUser addUsers={addUsers}></AddUser>

      {usersArr.map(
        (u) => (
          <ShowUsers name={u.name} age={u.age}></ShowUsers>
        )
        // key={uuid()}
        // return (
        //   <div style={objSty}>
        //     <h3> Name :{u.name}</h3>
        //     <h3>Age : {u.age}</h3>
        //   </div>
        // );
      )}
    </div>
  );
};

export default Root;
