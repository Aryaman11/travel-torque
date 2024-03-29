import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Createpass = () => {
  const location = useLocation();
  const[pass,setPass]=useState("")
  const[pass1,setPass1]=useState("")
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get('email');
  // console.log(">>>",paramValue)
  const[email,setEmail]=useState(paramValue ? paramValue : "")
    return (
        <div className="h-screen w-full bg-gray-100">
          <div className="max-sm:ml-6 flex max-md:flex-grow  pt-4 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3.414 13.778C2.5 14 2 15.192 2 15.192C2 15.192 5.398 15.626 6.949 17.313C8.5 19 9.071 22.263 9.071 22.263C9.071 22.263 10.47 22.698 10.485 20.849C10.5 19 9.778 17.313 9.778 17.313L13.091 14L16.701 21.704C16.701 21.704 18.08 22.23 18.04 20.365C18 18.5 16.85 10.242 16.85 10.242L19.678 7.413C19.869 7.22851 20.0214 7.00782 20.1262 6.76381C20.231 6.5198 20.2862 6.25736 20.2885 5.99181C20.2908 5.72625 20.2402 5.46289 20.1396 5.21709C20.0391 4.9713 19.8906 4.748 19.7028 4.56021C19.515 4.37243 19.2917 4.22392 19.0459 4.12336C18.8001 4.0228 18.5368 3.97219 18.2712 3.9745C18.0056 3.97681 17.7432 4.03198 17.4992 4.1368C17.2552 4.24162 17.0345 4.39398 16.85 4.585L13.947 7.488C13.947 7.488 6.148 6.09401 3.824 6.297C1.5 6.5 2.559 7.563 2.559 7.563L10.203 11.233L6.95 14.486C6.95 14.486 4.328 13.556 3.414 13.778Z" fill="#2F80ED"/>
            </svg>
            <p className="font-serif max-sm:ml-2 text-[#726c6c] md:ml-4"><a href="/">Travel Torque</a></p>
          </div>
          <div className="flex flex-col h-4/6 mt-8 w-96 px-8 self-center  rounded-xl mx-auto md:shadow-lg bg-white pt-10">
             <h1 className="text-lg font-medium text-center"> Create Password</h1>
             <p className="text-center text-xs mt-4">Use a minimum of 10 characters, including letters, lowercase letters, and numbers.</p>
             <div className="flex flex-col justify-center  w-full mt-8">
               <p className="text-xs mb-2">Password</p>
               <input placeholder="******" className="bg-gray-100 px-4 py-1 w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md" value={pass} onChange={(e)=>setPass(e.target.value)}></input>
               <svg className="-mt-6 ml-72" width="17" height="17" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g id="eye 1">
               <g id="Group">
               <path id="Vector" d="M12.9833 10.5C12.9833 12.15 11.6499 13.4833 9.99993 13.4833C8.34993 13.4833 7.0166 12.15 7.0166 10.5C7.0166 8.85 8.34993 7.51666 9.99993 7.51666C11.6499 7.51666 12.9833 8.85 12.9833 10.5Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path id="Vector_2" d="M9.99987 17.3916C12.9415 17.3916 15.6832 15.6583 17.5915 12.6583C18.3415 11.4833 18.3415 9.50831 17.5915 8.33331C15.6832 5.33331 12.9415 3.59998 9.99987 3.59998C7.0582 3.59998 4.31654 5.33331 2.4082 8.33331C1.6582 9.50831 1.6582 11.4833 2.4082 12.6583C4.31654 15.6583 7.0582 17.3916 9.99987 17.3916Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </g>
               </g>
               </svg>
               <p className="text-xs mt-5 mb-2">Confirm Password</p>
               <input placeholder="*******" className="bg-gray-100  px-4 py-1 w-full rounded-md" value={pass1} onChange={(e)=>setPass1(e.target.value)}></input>
               <svg className="-mt-6 ml-72" width="17" height="17" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g id="eye 1">
               <g id="Group">
               <path id="Vector" d="M12.9833 10.5C12.9833 12.15 11.6499 13.4833 9.99993 13.4833C8.34993 13.4833 7.0166 12.15 7.0166 10.5C7.0166 8.85 8.34993 7.51666 9.99993 7.51666C11.6499 7.51666 12.9833 8.85 12.9833 10.5Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path id="Vector_2" d="M9.99987 17.3916C12.9415 17.3916 15.6832 15.6583 17.5915 12.6583C18.3415 11.4833 18.3415 9.50831 17.5915 8.33331C15.6832 5.33331 12.9415 3.59998 9.99987 3.59998C7.0582 3.59998 4.31654 5.33331 2.4082 8.33331C1.6582 9.50831 1.6582 11.4833 2.4082 12.6583C4.31654 15.6583 7.0582 17.3916 9.99987 17.3916Z" stroke="#4F4F4F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </g>
               </g>
               </svg>
               <div className="pt-4 mt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-16 rounded w-full">Create Account</button>
               </div>
               <div className="Flex justify-center item-center pt-4 text-center">
                <p className="text-xs">By creating an account, you agree with our</p>
                <a class="text-[#2F80ED] pl-2 text-xs" href="">Terms and Conditions</a>
                <p className="text-xs">&</p>
                <a class="text-[#2F80ED] pl-2 text-xs" href="">Privacy Statement.</a>
               </div>
             </div>
          </div>
        </div>
    )  
}
export default Createpass;