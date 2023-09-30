import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import DisplayUsers from "./DisplayUsers";

function App() {
  const [userInputVal, setUserInputVal] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setUserInputVal({ ...userInputVal, [e.target.name]: e.target.value });
  };

  const submitClicked = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    setUsers((prevUsers) => [{ ...prevUsers, id: newId, userInputVal }]);
  };

  const delUser = (id) => {
    const deletedUsersList = users.filter((eachUser) => {
      return eachUser.id !== id;
    });
    console.log(deletedUsersList);
    setUsers(deletedUsersList);
  };

  return (
    <div>
      <form className="form-cont" onSubmit={submitClicked}>
        <h1 className="form-heading">Controlled Inputs</h1>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="name">
            Name:-
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={userInputVal.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="email">
            Email:-
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={userInputVal.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="email">
            Password:-
          </label>
          <input
            type="password"
            id="email"
            className="form-input"
            value={userInputVal.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="submit-btn-cont">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      {users.map((eachUser) => {
        return (
          <DisplayUsers {...eachUser} key={eachUser.id} delUser={delUser} />
        );
      })}
    </div>
  );
}

export default App;
