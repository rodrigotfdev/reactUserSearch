import React from "react";

export default function TopMenu({ isDark, setIsDark, toggleDarkMode }) {
  return (
    <div className="top-menu flex w-full lg:w-[730px] mt-6 h-10 justify-between  px-6 dark:text-white">
      <h1>devfinder</h1>
      <div className="flex  w-[78px] justify-between items-center">
        <span className="btn-dark  text-sm uppercase">
          {isDark ? "Light" : "Dark"}
        </span>
        <button className="btn-dark" onClick={toggleDarkMode}>
          {isDark ? (
            <img src="/img/icon-sun.svg" alt="" />
          ) : (
            <img src="/img/icon-moon.svg" alt="" />
          )}
        </button>
      </div>
    </div>
  );
}
