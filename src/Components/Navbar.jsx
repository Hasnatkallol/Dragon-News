import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { FirebaseAuthContext } from "../Firebase/FirebaseAuthContext";

const Navbar = () => {

  const { user,logOut } = use(FirebaseAuthContext)



  const handleLogout =()=> {
    logOut()
    .then(() => {
      
    }).catch((error) => {
       console.log(error);
       
    });
  }


  return (
    <div className="w-11/12 mx-auto ">
      <div className="flex justify-between">
        <div>
          { user && user.email}
        </div>
        <nav className="flex gap-5 items-center">
          <NavLink className={'font-bold text-accent'} to={"/home"}>Home </NavLink>
          <NavLink className={'font-bold text-accent'} to={"/about"}>About </NavLink>
          <NavLink className={'font-bold text-accent'} to={"/career"}>Career </NavLink>
        </nav>
        <div className="flex gap-2">
          <img className="w-10 h-10" src={`${user ? user.photoURL : userIcon}`} alt="No" />
          {
            user ?  <button onClick={handleLogout} className="btn btn-primary px-5">Log Out</button> :
                    <Link to={'/auth/login'}>
                        <button  className="btn btn-primary px-5">Login</button>
                   </Link>
          }
      
        </div>
      </div>
    </div>
  );
};

export default Navbar;
