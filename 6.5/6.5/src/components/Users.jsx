import { useEffect, useState } from "react"

function Users() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then(res => res.json())
      .then(data => setUsers(data))
  },[])
  return (
    <><table border={"1x"} cellPadding={3} cellSpacing={0}>
      {
      users.map((item,index)=>{
        return (<>
<tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
       </tr> </>)
      })

    }</table>
          </>)
        
  }

export default Users