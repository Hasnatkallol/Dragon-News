import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";

const Loginwith = () => {
    return (
        <div>
            <h2 className='font-bold mb-3'>Login With</h2>
         <div className='space-y-3'>
         <button className='btn w-full btn-outline btn-primary'>
            <FcGoogle size={24}></FcGoogle>
            Login With Google</button>
         <button className='btn w-full btn-outline btn-secondary'>
           <FaGithub size={24}/>
            Login With Github</button>
         </div>
        </div>
    );
};

export default Loginwith;