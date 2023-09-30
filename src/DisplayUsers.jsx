import React from "react";
import "./DisplayUsers.css";

const DisplayUsers = ({ id, name, email, delUser }) => {
  const removeUser = (id) => {
    delUser(id);
  };

  return (
    <div className="display-users">
      <div className="display-users-cont">
        <h1 className="display-user-name">Hello:{name}</h1>
        <p className="display-user-email">Email:{email}</p>
      </div>
      <div>
        <button
          className="btn display-users-remove-btn"
          onClick={() => {
            removeUser(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default DisplayUsers;
