import React from "react";
import "./User.css";

const User = (props) => {
  const { name, id, address } = props.user;
  const showcity = props.showcity;

  return (
    <div className="container">
      <div className="d-flex">
        <h4>this is {name}</h4>
        <h5>All user"s id is {id}</h5>
        <address>
          <b>address street</b>: {address.street}
          <br></br>
          <button onClick={() => showcity(address.city)}>show city</button>
        </address>
      </div>
    </div>
  );
};

export default User;
