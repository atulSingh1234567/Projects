import React, { useEffect, useState } from 'react'
import MidCard from './MidCard';



export default function RelevantPage() {
 
  const [user , setUser] = useState([])

  const url = 'https://api.github.com/users'
  const fetchUsers = async ()=>{
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)
    setUser(data)
  }

  useEffect(
    ()=>{
      fetchUsers()
    }
    , []
  )

  return (
    
        <MidCard users = {user.slice(0,6)}/>      
    
  )
}
