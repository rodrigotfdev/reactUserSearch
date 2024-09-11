import React from "react";
import { useState } from "react";
import { RiUserSearchFill } from "react-icons/ri";

export default function UserSearch({ userQuery, setUserQuery }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setUserQuery(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-around w-[89%] md:w-[95%] mt-6 rounded-lg bg-white h-[46px] lg:w-[730px] dark:bg-darkBoxes">
      <RiUserSearchFill className="text-btnColor w-1/6" />
      <input
        type="search"
        name=""
        id=""
        placeholder="Search GitHub username..."
        className="w-4/6 h-full dark:bg-darkBoxes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn-primary rounded-lg  h-[46px] bg-btnColor font-bold text-white w-1/6"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

// feat: add Enter key press functionality for search

