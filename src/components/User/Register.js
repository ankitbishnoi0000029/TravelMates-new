"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Registerform from "./Registerform";
import FromHeader from "./FromHeader";

function Register() {
 

  return (
    <div>
      <div className="w-full bg-[url('/banner/banner_bg.png')] text-white mx-auto flex justify-center items-center">
       <FromHeader />
      </div>
      <div className="bg-[#391965] p-8 ">

   <Registerform />
      </div>
     
    </div>
  );
}

export default Register;
