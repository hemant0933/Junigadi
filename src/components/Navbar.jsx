import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const socialMediaLinks = [
    { icon: FaFacebook, link: "https://www.facebook.com/" },
    { icon: FaInstagram, link: "https://www.instagram.com/" },
    { icon: FaWhatsapp, link: "https://www.whatsapp.com/" },
    { icon: FaTwitter, link: "https://twitter.com/" },
  ];

  return (
    <div
      className="w-full max-w-screen-2xl sticky top-0 right-0 left-0 bg-black
      z-[10000]"
    >
      <div
        className="w-full h-10 flex items-center gap-8 bg-orange-600
       text-orange-200 px-[91px]"
      >
        {socialMediaLinks.map((item, index) => (
          <a href={item.link} key={index}>
            <item.icon />
          </a>
        ))}
      </div>

      <div className="flex items-center justify-between px-[20px] md:px-[91px] py-4">
        <div className="p-2 text-3xl font-semibold">JuniGadi</div>
        <div className="flex gap-3 text-lg font-medium items-center">
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="text-[16px] cursor-pointer rounded-md bg-slate-100 hover:bg-slate-200 font-medium px-6 py-3"
          >
            Login
          </button>
          <button
            onClick={() => setIsSignupModalOpen(true)}
            className="text-[16px] cursor-pointer rounded-md bg-slate-100 hover:bg-slate-200 font-medium px-6 py-3"
          >
            Signup
          </button>
        </div>
      </div>
      {isLoginModalOpen && <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />}
      {isSignupModalOpen && <SignupModal setIsSignupModalOpen={setIsSignupModalOpen} />}
    </div>
  );
};

export default Navbar;
