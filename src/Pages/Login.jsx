import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const Login = () => {
  const [errorMessage,setErrorMessage] = useState('')
  const { logIn } = useContext(FirebaseAuthContext);
  const location = useLocation();
 
  const navigate = useNavigate()

  const handleLogin = (e) => {
   
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user; 
        
          console.log(user);
          navigate( `${location.state ? location.state : '/'}`)
      })
      .catch((error) => {
        setErrorMessage(error.message)
      });
  };

  return (
    <div className="w-11/12 mx-auto card bg-base-200 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-black font-semibold text-center text-2xl">Login Your Account</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div>
          {
            errorMessage && <p className="text-red-500 text-center font-bold">{errorMessage}</p>
          }
        </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </form>
       
        <h1 className="text-black font-semibold text-center">
          Don't have an account? <Link className="text-red-600" to={'/auth/register'}>Register</Link>
        </h1>
      </div>
    </div>
  );
};

export default Login;
