import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const spinTest = ()=>{
        return <div classname='px-4 py-4 border-white border-r  border-b border-l rounded-2xl animate-spin'></div>
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [spin, setSpin] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    useEffect(() => {
        setSpin(loading ? true : false);
        if (error) {
            toast('Erro no e-mail ou senha!')
        }
    }, [loading]);
    useEffect(() => {
        if (user) {
            navigate('/');
        }

    }, [user, navigate]);
    return (
        <>
            <div className='w-1/2 h-svh bg-gray-600 absolute z-0 rounded-r-4xl'></div>
            <div className='w-full h-svh justify-center items-center grid text-white z-10 relative'>
                <div className="w-96 h-[400px] bg-blue-800 rounded-2xl p-5 flex flex-col gap-5 justify-center">
                    <p className='text-center mb-4'>LayFut</p>
                    <input className='outline-none border-2 border-gray-400 rounded px-1 py-1 mx-10 text-center' type="text" placeholder='Digite seu email' onChange={e => setEmail(e.target.value)} />
                    <input className='outline-none border-2 border-gray-400 rounded px-1 py-1 mx-10 text-center' type="password" placeholder='Digite sua Senha' onChange={e => setPassword(e.target.value)} />
                    <div className='flex justify-center'>
                        <button  className='bg-gray-700 w-28 py-2 rounded hover:bg-gray-500 flex items-center justify-center' type="button" onClick={() => createUserWithEmailAndPassword(email, password)}>{spin? <img className=' w-7 h-7 animate-spin' src="../../assets/loading.svg" alt="" />: <p>Registrar</p> }</button>
                    </div>
                    <p className='text-center'>Já possui conta? <strong><Link to="/">Acesse</Link></strong></p>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Register;