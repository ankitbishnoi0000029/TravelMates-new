import Image from "next/image";
import React from "react";

function Register() {
  return (
    <div  >
      <div className="w-full mx-auto flex justify-center items-center ">
        <div className="text-3xl text-slate-800 max-w-fit text-center p-10 ">
          <h3>Create your Account </h3>
          <p className="text-lg text-slate-500 ">
            Create account and find your mate with us!
          </p>
        </div>
      </div>
      <div className="flex bg-pink-50">
        <div>
          <Image
            height={400}
            width={400}
            src="/login/register.png"
            alt="Register image "
          />
        </div>
        <div>
          <div>
            <h1>Fill out the form to get started</h1>
          </div>
          <div>
            <from>
              <div>
                <label>first Name</label>
                <input className="border-2 border-gray-300 p-2 rounded-lg" placeholder="Enter first Name"  />
                <label>first Name</label>
                <input placeholder="Enter first Name"  /> 
              </div>
              <div>
                  <label>Email</label>
                  <input className="border-2 border-gray-300 p-2 rounded-lg" placeholder="Enter Email addresh" />
              </div>
              <div>
                  <label>Mobile </label>
                  <input className="border-2 border-gray-300 p-2 rounded-lg" placeholder="Enter Mobile Number " />
              </div>
              <div>
                  <label>Gender </label>
                  <select>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <label>Country </label>
                  <select>
                    <option>India</option>
                    <option>Usa</option>
                  </select>
              </div>  
              <div>
                <label>Create Your Password</label>
                <input className="border-2 border-gray-300 p-2 rounded-lg" placeholder="**********" ></input>
                <label>Confirm   Your Password</label>
                <input className="border-2 border-gray-300 p-2 rounded-lg" placeholder="**********" ></input>
              </div>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

