import React, { useState, useContext } from "react";
import { UserContext } from "../context/user";


function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const { onLogin } = useContext(UserContext);
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username: username,
          password: password
         }),
      }).then((r) => {
        setUsername("")
        setPassword("") 
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
    })
  }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <ul>
        {errors.map((err) => (
        <li key={err}>{err}</li>
        ))}
        </ul> 
      </form>
    );
}

export default LoginForm;