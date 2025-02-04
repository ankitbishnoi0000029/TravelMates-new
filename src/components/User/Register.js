"use client";
import React from "react";
import Registerform from "./Registerform";
import FromHeader from "./FromHeader";

function Register() {
  return (
    <div className="h-[100vh] ">
      <div className="bg-[url('/banner/banner_bg.png')] h-[100vh] ">
        <Registerform />
      </div>
    </div>
  );
}

export default Register;
