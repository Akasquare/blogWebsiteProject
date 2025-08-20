import React from 'react'
import { useOutletContext } from 'react-router-dom'


const UserList = () => {
    let user =useOutletContext()

  return (
    <div>UserList</div>
  )
}

export default UserList