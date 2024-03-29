import { useEffect, useState } from "react"

export function useFetch() {
    const [users,setUsers]=useState([])
    const baseUrl=`https://jsonplaceholder.typicode.com`;
    useEffect(()=>(
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>console.log(data))    
    ),[])
  return (
    <div>useFetch</div>
  )
}
