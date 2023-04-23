import { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const {googleSignIn, user} = UserAuth()
    const navigate = useNavigate()

    const handelGoogleSignIn = async() => {
    
        try {
            await googleSignIn()
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
      if(user != null) {
        navigate('/account')
      }
    },[user])

  return (
    <div className='signin'>
    <p id='sgn'>Sign In using Google</p>
    <div className='g-button'>
    <GoogleButton onClick={handelGoogleSignIn}/>
    </div>
    </div>
  );
}

export default Signin;
