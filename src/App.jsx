import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { RiUserSearchFill } from "react-icons/ri";

export default function App() {
  const [userQuery, setUserQuery] = useState("rodrigotfdev");

  return (
    <div className="app bg-lightBgColor h-screen flex flex-col items-center">
      <TopMenu />
   
    </div>
  );
}

function TopMenu() {
  return (
    <div className="top-menu flex w-full lg:w-[730px] mt-6 h-10 justify-between  px-6">
      <h1>devfinder</h1>
      <div className="flex  w-[78px] justify-between items-center">
        <span className="btn-dark  text-sm uppercase">Dark </span>
        <button className="btn-dark">
          <img src="/img/icon-moon.svg" alt="" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}