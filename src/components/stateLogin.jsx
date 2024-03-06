import { useState } from "react";
export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [enteredValue, setEnteredValue] = useState({email: '', password: ''});
  function handleSumit(event){
    event.preventDefault();
    console.log(enteredValue)
  }
  function handleInput(identifier,event){
    setEnteredValue(prevState => ({
      ...prevState, [identifier]:event
    }))
  }
  return (
    <form onSubmit={handleSumit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInput('email',event.target.value)}
          value={enteredValue.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
          onChange={(event) => handleInput('password',event.target.value)}
          value={enteredValue.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
