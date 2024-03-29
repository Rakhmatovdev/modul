import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MyIndex from "../redux/myIndex";

const Account = () => {
  const { users  } = useContext(AuthContext);

  const handleBtn=(e)=>{
e.preventDefault()
  }
  return (
    <div className="container">
    <h1>This is Account page</h1>
     
      <MyIndex/>
    </div>
  )
}

export default Account
