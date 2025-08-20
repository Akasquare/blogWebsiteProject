import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  
  const navigate = useNavigate()
  let { register, handleSubmit } = useForm();
  async function  handleFormSubmit(data) {
    // console.log(data)
    let res = await axios.post(`http://localhost:8000/user/login`, data);

    localStorage.setItem('logedIn', JSON.stringify(res.data))
    // console.log(res.data)
    if(res.data.success){
      navigate('/')

    }else{

      alert("invalide email or password")
    }
  }
  return (
    <>
    <div className="flex items-center justify-center p-10 bg-zinc-100 h-[100vh]">


      <form className="rounded-xl bg-zinc-200 p-10" onSubmit={handleSubmit(handleFormSubmit)} action="">
         <div className="flex justify-center pb-10 ">
          <h1 className="text-4xl">Login</h1>
         </div>
        <div className="flex items-center gap-x-11 pb-5">
        <label htmlFor="email">Email</label>
        <input className="border border-purple-500 rounded-xl p-2"
          {...register("email")}
          type="text"
          id="email"
          placeholder="Enter email"
          />
          
        </div>
        <div className="flex items-center gap-x-4 pb-5">

        <label htmlFor="password">Password</label>
        <input className="border border-purple-500 rounded-xl p-2"
          {...register("password")}
          type="password"
          id="password"
          placeholder="Enter password"
          />
          </div>
          
          <div className="flex justify-center">
            <button className="bg-purple-400 hover:bg-purple-600 px-5 py-1 rounded-2xl text-white">login</button>
          </div>
      </form>
      </div>
    </>
  );
};

export default Login;
