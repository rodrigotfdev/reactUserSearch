import React from "react";
import { useState, useEffect } from "react";


import TopMenu from "./components/TopMenu";
import UserSearch from "./components/UserSearch";
import Results from "./components/Results";

export default function App() {
  const [userQuery, setUserQuery] = useState("rodrigotfdev");
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="app bg-lightBgColor h-screen flex flex-col items-center dark:bg-darkBg">
        <TopMenu
          toggleDarkMode={toggleDarkMode}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        <UserSearch userQuery={userQuery} setUserQuery={setUserQuery} />
        <Results userQuery={userQuery} />
      </div>
    </div>
  );
}





