import React,{useState} from 'react'
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link, useNavigate } from "react-router-dom";
 

import './SignUpForm.css'

const SignUpForm = () => {
  const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")

    const signup = () =>{
        const auth = getAuth();
        console.log(email,pass);
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("success");
          navigate('/projects')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
        });
    }
  return (
    <div class="relative py-3 sm:max-w-xl sm:mx-auto mt-10">
        <h1 className='font-semibold text-sm text-gray-400 pb-1 block text-center mt-5'>Join With Us</h1>
  <div
    class="relative"
  >
    <div class="max-w-md mx-auto text-white">
      <div class="mt-5">
        <label
          class="font-semibold text-sm text-gray-400 pb-1 block"
          for="login"
          >E-mail</label
        >
        <input
          class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
          type="text"
          id="login"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <label
          class="font-semibold text-sm text-gray-400 pb-1 block"
          for="password"
          >Password</label
        >
        <input
          class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-700 text-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
          type="text"
          id="password"
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
        />
      </div>
      <div className='text-center'>
        <div className="signUpButtonForm" onClick={signup}>Sign Up</div>
      </div>
      
      <div class="text-center mb-4">
        <Link
          class="text-xs font-display font-semibold  hover:text-gray-400 cursor-pointer"
          to='/login'
        >
          Already have an account? Log In
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default SignUpForm