import React, { use } from "react";
import { Link } from "react-router";

import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const Register = () => {
  const { createUser } = use (FirebaseAuthContext)
   

    const handleRegister = (e) => {
          e.preventDefault();
         const name = e.target.name.value;
         const photo = e.target.photo.value;
         const email = e.target.email.value;
         const password = e.target.password.value;
        
         createUser(email,password)
         .then((userCredential) => {
           const user = userCredential.user;
           console.log(user);
           
         })
         .catch((error) => {
          console.log(error);
         });
       
         
         
    }
  return (
    <div className="w-11/12 mx-auto card bg-base-200   max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-black font-semibold  text-center text-2xl">
          Register Your Account
        </h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          <label className="label">Photo URL</label>
          <input name="photo" type="text" className="input" placeholder="photo link" />
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">SignUp</button>
        </form>
        <h1 className="text-black font-semibold  text-center ">
          Already have an account ?{" "}
          <Link className="text-red-600" to={"/auth/login"}>
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Register;
