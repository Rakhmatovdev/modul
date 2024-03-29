import { useEffect, useState } from "react"

function Posts() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
      .then(data => setPosts(data))
  },[])
  return (
    <>
    <table border={"1x"} cellPadding={3} cellSpacing={0}>
    
    {
      posts.map((item,index)=>{
        return (<>
<tr key={index}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
       </tr> </>)
      })

    }</table></>
  )
}

export default Posts