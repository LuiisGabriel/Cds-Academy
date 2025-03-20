import React from 'react';
import { useUser } from '../lib/customHooks';
import Navbar from './Navbar';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CreateAsset } from '../graphQl/Mutations';

const Profile = () => {
  const { user, authenticated } = useUser();
  const [uploadUrl, setUploadUrl] = useState();
  
  if (!user || !authenticated) {
    return <div className="p-16 bg-gray-300 h-screen flex justify-center items-center">
      <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
    </div>;
  }

  function handleChange(e) {
      console.log(e.target.files);
      setUploadUrl(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <nav className="sticky top-0 z-50"><Navbar /></nav>
        <div className="w-full h-screen flex justify-center items-center bg-gray-300">
          <div className="w-1/2 h-3/4 shadow-lg rounded-md bg-white p-8 flex flex-col">
            <div className='flex justify-center items-center'>
              <img
                alt={user.firstname}
                src={uploadUrl}
                className="size-24 rounded-full"
              />
            </div>
            <h2 className="text-center font-medium text-2xl ">
              {user.firstname} {user.lastname}
            </h2>
            <h1 className='flex justify-center text-2xl mb-4 text-gray-400'>
              {user.email}
            </h1>
            <div className="flex flex-1 flex-col justify-evenly items-center">

              <input
                className="border-2 outline-none p-2 rounded-md w-1/3"
                type="file"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
    </>
  );
}
export default Profile;