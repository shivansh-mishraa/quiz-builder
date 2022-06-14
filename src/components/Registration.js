import React, { useState } from 'react'
import { Form,Alert } from 'react-bootstrap';
import Login  from './Login'

function Registration() {

    const [ name , setName] = useState("");
    const [ email , setEmail] = useState("");
    const [ password , setPassword] = useState("");
    const [ flag , setFlag] = useState(false);
    const [ logIn , setLogin] = useState(true);

function handleSubmit(e){
    e.preventDefault();
    
    if(!name || !email || !password){
        setFlag(true);
    }
    else{
        setFlag(false);
        localStorage.setItem("Email",JSON.stringify(email)); 
        localStorage.setItem("Password",JSON.stringify(password)); 
        setLogin(!logIn);
    }

}

    function handleClick(){
        setLogin(!logIn);
    }


  return (
    <div className="p-4">
          {logIn ? (
        <form onSubmit={handleSubmit}>
            <h1>User Registration</h1>
            <div className='form-group p-1'>
                <label>Name</label>
                <input type="text"
                className='form-control'
                placeholder='Enter Full Name'
                onChange={(event) => setName(event.target.value)}
                ></input>
            </div>
            <div className='form-group p-1'>
                <label>Email</label>
                <input type="email"
                className='form-control'
                placeholder='Enter Email'
                onChange={(event) => setEmail(event.target.value)}
                ></input>
            </div>
            <div className='form-group p-1'>
                <label>Password</label>
                <input type="password"
                className='form-control'
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)}
                ></input>
            </div>
            <br></br>
            <button type='submit' className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="already-info">Already have an account? {" "}<span className='text-info' onClick={handleClick}>Log in</span> </p>

            {flag && (
                <Alert color="primary" variant='danger'>
                    Please enter your details in a valid format
                </Alert>
            )}


        </form>
         ) : (

                <Login></Login>
                )}

    </div>
  );
}

export default Registration