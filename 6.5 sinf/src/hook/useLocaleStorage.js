import { useState } from "react"

export  const useLocaleStorage=()=> {
 const [state,setState]=useState(localStorage.getItem("myUser"))
 function remove(){
    localStorage.removeItem("myUser")
 }
 function createUser(param){
    localStorage.setItem("myUser",param)
 }
    return {state,remove,createUser}
}