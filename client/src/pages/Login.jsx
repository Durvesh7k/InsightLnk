import React, { useState, useContext } from 'react';
import blogBro from "../assets/Blogging-bro.png";
import { API } from '../services/api';
import { DataContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const intialUser = {
  name: '',
  userName: '',
  password: '',
}

const intailLogin = {
  userName: '',
  password: '',

}

const Login = ({ setIsAuthenticated }) => {
  const [accountState, setAccountState] = useState('login')
  const [user, setUser] = useState(intialUser);
  const [login, setLogin] = useState(intailLogin);
  const [error, setError] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [noMatch, setNoMatch] = useState(false);


  const { setAccount } = useContext(DataContext);

  const navigate = useNavigate();




  const onInputChange = (event) => {
    setUser({ ...user, [event.name]: event.value })
  }

  const onLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const signupUser = async () => {
    let response = await API.userSignup(user);
    if (response.isSuccess) {
      setAccountState('login');
      setUser(intialUser);
      setError('');
    }
    else {
      setError("Something went wrong please try again later", error);
    }
  }

  const loginUser = async () => {
    try {
      let response = await API.loginUser(login);
      if (response.isSuccess) {
        setError('');
        sessionStorage.setItem("accessToken", `Bearer ${response.data.accessToken}`)
        sessionStorage.setItem("refreshToken", `Bearer ${response.data.refreshToken}`)

        setAccount({ name: response.data.name, userName: response.data.userName })
        setIsAuthenticated(true);
        navigate('/');
      }
      else {
        setError("Something went wrong please try again later", error);
      }

    } catch (e) {
      console.log("password does not match")
      setNoMatch(!noMatch)
    }

  }

  return (
    <>
      <div className='flex flex-col md:flex-row w-screen h-screen '>
        <div className='bg-[#334155] flex justify-center items-center  md:w-1/2 h-screen'>
          <img className=' w-3/4' src={blogBro} alt='blogging vector' />
        </div>
        <div className='flex justify-center items-center  md:w-1/2 md:mt-0 bg-white '>
          {accountState === "login" ? (
            <div className='flex flex-col justify-start w-3/4 md:w-1/2 py-6 md:py-0'>

              <h3 className='font-bold text-2xl'>Account Login</h3>
              <p className='mt-2 text-gray-500 text-sm'>If you are already a member you can login with your email address and password.</p>
              <p className='text-sm mt-8'>Username</p>
              <input onChange={e => onLoginChange(e)} name='userName' type='text' className='h-14 mt-2 rounded-md border-2 outline-none p-2' />
              <p className='text-sm mt-6'>Password</p>
              <div className='h-14  mt-2 rounded-md border-2 flex flex-row items-center '>
                <input onChange={e => onLoginChange(e)} type={`${passwordType}`} className='grow outline-none p-2 ' name='password' />
                {passwordType === 'password' ? (
                  <AiFillEye size={30} className='text-gray-600  grow-0 mx-4 cursor-pointer' onClick={() => setPasswordType('text')} />
                ) : (
                  <AiFillEyeInvisible size={30} className='text-gray-600  grow-0 mx-4 cursor-pointer' onClick={() => setPasswordType('password')} />
                )}
              </div>

              {noMatch && <p className='mt-2 text-sm text-red-600'>Enter the correct details!</p>}

              <button
                className='h-14 mt-6 rounded-md border-2 bg-[#334155] text-white font-semibold hover:bg-gray-600'
                onClick={() => loginUser()}
              >
                Login
              </button>
              <div className='flex justify-center mt-3 text-sm font-semibold'>
                <p>Don't have an account ? </p>
                <p className='text-sky-700 cursor-pointer' onClick={() => setAccountState("signup")}>
                  &nbsp; Sign up here
                </p>
              </div>
            </div>
          ) : (
            <div className='flex flex-col justify-start mt-4 w-3/4 mb-8 md:mb-0 md:w-1/2'>
              <h3 className='font-bold text-2xl'>Account Signup</h3>
              <p className='mt-2 text-gray-500 text-sm'>Become a member and enjoy exclusive promotions.</p>
              <p className='text-sm mt-8'>Name</p>
              <input
                name='name'
                type='text'
                className='h-14 mt-2 rounded-md border-2 outline-none p-2'
                onChange={e => onInputChange(e.target)}
              />
              <p className='text-sm mt-8'>Username</p>
              <input
                type='text'
                name='userName'
                className='h-14 mt-2 rounded-md border-2 outline-none p-2'
                onChange={e => onInputChange(e.target)}
              />
              <p className='text-sm mt-6'>Password</p>
              <div className='h-14  mt-2 rounded-md border-2 flex flex-row items-center '>
                <input onChange={e => onInputChange(e.target)} type={`${passwordType}`} className='grow outline-none p-2 ' name='password' />
                {passwordType === 'password' ? (
                  <AiFillEye size={30} className='text-gray-600  grow-0 mx-4 cursor-pointer' onClick={() => setPasswordType('text')} />
                ) : (
                  <AiFillEyeInvisible size={30} className='text-gray-600  grow-0 mx-4 cursor-pointer' onClick={() => setPasswordType('password')} />
                )}
              </div>
              <button
                className='h-14 mt-6 rounded-md border-2 bg-[#334155] text-white font-semibold hover:bg-gray-600'
                onClick={() => signupUser()}
              >Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Login