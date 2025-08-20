import React from 'react'

const ProfileCircle = (props) => {
  return (
    <div className="flex  gap-x-3  items-center">
               <img  
                  className= {` ${props.size} rounded-full`}
                  src={props.image}
                  alt="Profile image"
               />
               <h1>{props.name}</h1>
            </div>
  )
}

export default ProfileCircle