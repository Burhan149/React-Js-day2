
import React, { useState } from 'react'

const A = () => {
  const [name , updateName] = React.useState('Hadi Raza');
    const [lastName , updateLastName] = React.useState('Rizvi Hadi Raza')
     function myClicks(){
        alert('Change the name')
        console.log("Hi")
     }
    return (
    <div>
      <h1>A - {name}</h1>
      <button onClick={ () => {
        alert('CHange the name for me ')
        // updateName("Ali abbas shah")
      }}>Press to change the name </button>
      
      {/* <input type="text" value={lastName} onChange={(e) => console.log(e.target.name)} name="lastname"/> */}
    </div>
  )
}

export default A;

