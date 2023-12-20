
import React from 'react'
 {/* stateless componnet */}
        {/* function with onchange event */}
const B = () => {
  const [lastName , updateLastName] = React.useState('Raza ALi')
  

  const changeLastName = (e) => {
    updateLastName(e.target.value)
  }

  return (
    <div>
    <h5>A - {lastName}</h5>
    <input type='text' value={lastName} onChange={changeLastName} name='lastname'/>
    
    </div>
  )
}

export default B;
