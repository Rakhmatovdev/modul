import "./App.css";
import Register from "./components/Register";
import Account from "./components/Account";
import { useState } from "react";
import {useLocaleStorage} from "./hook/useLocaleStorage";
function App() {
  //custome hook
  const {state,remove,createUser}=useLocaleStorage()

  // const [name, setName] = useState(localStorage.getItem("myUser"));
  const [name, setName] = useState(state);
  const [pwd, setPwd] = useState("");
  const [signIn, setSignIn] = useState(!!state);

  const handleUser = (e) => {
    e.preventDefault();
    // localStorage.setItem("myUser", name);
    createUser(name)
    setSignIn(true);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    // localStorage.removeItem("myUser");
    remove
    setSignIn(false);
  };
  return (
    <>
      {signIn ? (
        <Account
          handleUser={handleUser}
          name={name}
          handleLogout={handleLogout}
        />
      ) : (
        <Register
          handleUser={handleUser}
          name={name}
          pwd={pwd}
          setName={setName}
          setPwd={setPwd}
        />
      )}
    </>
  );
}

export default App;
