import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserListHandler = newUser => {
    setUsersList((prevUserList) => {
      return [...prevUserList, newUser];
    });
  }
  return (
    <div>
      <AddUser addUserList={addUserListHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
