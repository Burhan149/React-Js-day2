//Highlight
// Usestates hooks with 
// events onclick onchange
// Password == to confirmPassword
// showPassword or hidepassword

import React from 'react'

const C = () => {
  const [name , setName] = React.useState('');
  const [email , setEmail] = React.useState('');
  const [password , setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showPassword , setShowPassword] = React.useState(false);
   const toggleBtn =() =>{
    return(
      setShowPassword(!showPassword)
    )
   }
   const submitHandler = () => {
    if(password !== confirmPassword){
      alert('Password not matched')
    }
   console.log(
    name , email , password ,  confirmPassword
   )
   }

  return (
    <div>
      <h1>Hello world</h1>
      <input
      type='text'
      value={name}
      placeholder='Your Name'
      onChange={(e) => setName(e.target.value)}
      />      <br/><br/>
      <input
      type='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder='Your Email'
      />      <br/><br/>
      <input
      type= {showPassword ? "text" : "password"}
      value={password}
      placeholder='Your Password'
      onChange={(e) => setPassword(e.target.value)}
      />       <br/><br/>
      <input
      type= {showPassword ? "text" : "password"}
      value={confirmPassword }
      placeholder='Confirm Password'
      onChange={(e) =>setConfirmPassword(e.target.value)}
      />
      <button 
      onClick={toggleBtn}
      >Show Password</button>
      <br/><br/>
      <button
      onClick={submitHandler}
      >
        Submit Form
      </button>
      
    </div>
  )
}

export default C
