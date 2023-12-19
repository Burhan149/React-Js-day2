

import React from 'react'

const A = () => {
// State component
  const [name , updateName] = React.useState("Hadi RAza")
  const [lastName , updateLastName] = React.useState("Yasir Tizvi")


  function myClicks(){
    alert("hello change the name for me")
    console.log("hi jan")
    updateName ("abbas ali shah")

  }
  return (
    <div>
      <h1>A - {name}</h1>
      {/* <button 
      onClick= {(myClicks)}>Press to change</button> */}

      <input type="text"  value={lastName}  onChange={(e) => console.log(e.target.name)}/>
    </div>
  )
}

export default A


