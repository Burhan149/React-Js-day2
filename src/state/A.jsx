import React from 'react';
 

const A = () => {
  // State component
  const [name, updateName] = React.useState("Hadi RAza");
 
  // function with onclick simple function or with arrow function
  function myClick(){
    // alert('Hello learning events today')
    // console.log("Hi user")
    updateName("abbas ali bhai")
  }
  return(
    <div>
      <h2>A - {name}</h2>
      <button 
       onClick={myClick
      }
      >Press me to show</button>
    </div>
  );
}


export default A;
