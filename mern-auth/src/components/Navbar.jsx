import React from 'react';
import Auth from '../images/auth.png'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const {user, logOut} = UserAuth()

  const handelSignOut = async() => {
    try {
      await logOut()
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div className='Nav'>
      <a href='/'><img src={Auth} alt="logo" width={55} height={55} /></a>
      <a href='/'><h1>Google Auth</h1></a>
      {user?.displayName ? <button className='btn-log' onClick={handelSignOut}>Logout</button>:<a href='/signin'><button type='button' className='btn-signin'>Sign In</button></a>}
      
    </div>
  );
}

export default Navbar;
