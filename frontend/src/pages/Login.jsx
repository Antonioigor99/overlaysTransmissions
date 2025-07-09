import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../services/firebaseConfig';
import { ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
    if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      navigate('/placar')
    );
  }
  return (
    <>
      <div className='w-1/2 h-svh bg-gray-600 absolute z-0 rounded-r-4xl'></div>
      <div className='w-full h-svh justify-center items-center grid text-white z-10 relative'>
        <div className="w-96 h-[400px] bg-blue-800 rounded-2xl p-5 flex flex-col gap-5 justify-center">
          <p className='text-center mb-4'>LayFut</p>
          <input className='outline-none border-2 border-gray-400 rounded px-1 py-1 mx-10 text-center' type="text" placeholder='Digite seu email' value={email} onChange={e => setEmail(e.target.value)} />
          <input className='outline-none border-2 border-gray-400 rounded px-1 py-1 mx-10 text-center' type="password" placeholder='Digite sua Senha' value={password} onChange={e => setPassword(e.target.value)}/>
          <div className='flex justify-center'>
            <input className='bg-gray-700 w-28 py-2 rounded hover:bg-gray-500' type="button" value='Entrar'onClick={() => signInWithEmailAndPassword(email, password)} />
          </div>
          <p className='text-center'>Registre-se <strong><Link to="/register">Aqui</Link></strong></p>
        </div>
      </div>
      <ToastContainer />
    </>

  )
}

export default Login;