import { useRef, useState } from "react";
import Input from "./Input";
export default function Login() {
  const email=useRef();
  const password=useRef();
  function handleSumit(event){
    event.preventDefault();
    
    const enteredEmail=email.current.value;
    const enteredPassword=password.current.value;
    console.log(enteredEmail,enteredPassword)
  }
  
  return (
    <form onSubmit={handleSumit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="email" name="email" id="email" type="email" ref={email}/>
        

        <Input label="password" name="password" id="password" type="password" ref={password}/>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
