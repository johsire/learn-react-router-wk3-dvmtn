import React from 'react';
import { Link } from 'react-router-dom'

export default function Users({people}) {
  const peopleJSX = people.map((person, i) => {
    return (<Link to={`/users/${person.id}`} key={i}> {person.first_name} {person.last_name}</Link>)
  })
  return (
   <div>
   
       <h1>These are all the best people!</h1>
        {peopleJSX}
  
   </div> 
      )
}
