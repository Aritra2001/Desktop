import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const {logOut, user} = UserAuth()
  const handelSignOut = async() => {
    try {
      await logOut()
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div className='account'>
      <p>Welcome,  {user?.displayName}</p>
      <button type='button' className='btn-logout' onClick={handelSignOut}>Log Out</button>
    </div>
  );
}

export default Account;
