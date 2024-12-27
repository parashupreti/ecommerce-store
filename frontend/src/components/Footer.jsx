import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            iste ipsam modi dolores soluta rerum hic at sequi.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977-9860000012</li>
            <li>info@foreveryou.com.np</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className=" py-5 text-sm text-center bg-black text-white">
          COPYRIGHT 2024@ Forerveryou - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
