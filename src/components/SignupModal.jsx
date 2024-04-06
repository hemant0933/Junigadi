import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import InputComponent from "./InputComponent";

const SignupModal = ({ setIsSignupModalOpen }) => {
  const [gmail, setGmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignupForm = () => {
    setLoading(true);

    // e.preventDefault();

    console.log(name, gmail, password);
  };
  return (
    <div className="fixed w-full inset-0 z-[1000] bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-[80%] md:w-[30%] h-auto p-2 rounded-lg shadow-lg">
        <div className="w-full flex items-center justify-between px-4 py-2">
          <h2 className="font-bold text-black text-3xl">Signup</h2>
          <span
            onClick={() => setIsSignupModalOpen(false)}
            className="text-4xl cursor-pointer
           text-black hover:text-orange-600"
          >
            <IoCloseCircle />
          </span>
        </div>
        <div className="w-full flex flex-col">
          <form className="w-[80%] h-auto flex flex-col px-5">
            <InputComponent
              state={fullname}
              setState={setFullName}
              type="text"
              placeholder="Name"
              required={true}
            />
            <br />
            <InputComponent
              state={gmail}
              setState={setGmail}
              type="email"
              placeholder="Gmail"
              required={true}
            />
            <br />
            <InputComponent
              state={password}
              setState={setPassword}
              type="password"
              placeholder="Password"
              required={true}
            />
            <br />
            <InputComponent
              state={confirmPassword}
              setState={setConfirmPassword}
              type="password"
              placeholder="Confirm Password"
              required={true}
            />
            <br />
            <button
              type="button"
              onClick={handleSignupForm}
              className="text-[16px] 
              cursor-pointer rounded-md bg-orange-600
            hover:bg-orange-500 
              font-sm px-6 py-3 mb-14"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
