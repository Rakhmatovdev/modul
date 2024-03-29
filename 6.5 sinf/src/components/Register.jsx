import { useEffect, useRef, useState } from "react";
function Register({handleUser,name,pwd,setName,setPwd}) {
  const inputElement = useRef();
  
  useEffect(() => {
    inputElement.current.focus();
  }, []);



  return (
    <div>
        <form onSubmit={handleUser}>
        <h2>Sign up</h2>
          <input
            placeholder="Name..."
            type="text"
            ref={inputElement}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />

          <input
            placeholder="Password..."
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
          <br />
          {!name || !pwd ? (
            <button type="submit" disabled>
              Submit
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </form>
      
    </div>
  );
}

export default Register;
