import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Results({ userQuery }) {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const apiToken = import.meta.env.VITE_GITHUB_TOKEN;
  
      if (!userQuery) return;
  
      setLoading(true);
      setError(null);
  
      axios
        .get(`https://api.github.com/users/${userQuery}`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setUserData(response.data);
          }
          setLoading(false);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setError("User not found");
          } else {
            setError("An error occurred");
          }
          setUserData(null);
          setLoading(false);
        });
    }, [userQuery]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!userData) return null;
  
    const formattedDate = new Date(userData.created_at).toLocaleDateString();
  
    return (
        <div className="user-results flex flex-col mt-[16px] px-6 mx-6 mb-16 rounded-lg bg-white dark:bg-darkBoxes dark:text-white h-[80%] lg:h-screen lg:w-[730px]">
        <div className="user-top-info flex   items-center w-full  justify-around mt-[32px] ">
          <div className="user-img w-[70px] h-[70px]">
            <img src={userData.avatar_url} alt="" className="rounded-full" />
          </div>
          <div className="user-sec-info h-full w-4/6 flex flex-col">
            <h2>{userData.name}</h2>
            <span className="text-blue-700">@{userData.login}</span>
            <span>Joined {formattedDate}</span>
          </div>
        </div>
        <div className="user-bio  mt-[32px]">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit itaque
            possimus esse repudiandae ea doloremque officia recusandae laboriosam
            qui repellat!
          </p>
        </div>
        <div className="repo-stats-info flex justify-between rounded-lg items-center h-24 mt-[33px] bg-lightBgColor dark:bg-darkBg">
          <div className="stats-left flex flex-col text-center w-2/6">
            <span>Repos</span> {userData.public_repos}
          </div>
          <div className="stats-middle flex flex-col text-center w-2/6">
            <span>Followers</span> {userData.followers}
          </div>
          <div className="flex flex-col text-center w-2/6">
            <span>Following</span>
            {userData.following}
          </div>
        </div>
        <div className="other-info mt-[24px] mb-[48px]">
          <div className="location flex w-full h-14 items-center ">
            <img src="/img/icon-location.svg" alt="" className="mx-4 w-4" />
            <span className="mx-4">
              {userData.location
                ? userData.location
                : "User location not available"}
            </span>
          </div>
          <div className="personal-link flex items-center h-14 text-xs">
            <img src="/img/icon-website.svg" alt="" className="mx-4 w-4" />
            <span className="mx-4">
              {userData.blog
                ? userData.blog
                : "User personal website not available!"}
            </span>
          </div>
          <div className="user-email flex items-center h-14 text-xs">
            <img src="/img/email-logo.svg" alt="" className="w-4 mx-4" />
            <span className="mx-4">
              {userData.email ? userData.email : "User e-mail not available!"}
            </span>
          </div>
        </div>
      </div>
    );
  }
  