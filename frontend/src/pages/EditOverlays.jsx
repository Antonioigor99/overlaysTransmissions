import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const EditOverlays = () => {
    const [inputPrimaryTeam, setInputPrimaryTeam] = useState('');
    const [inputSecondTeam, setInputSecondTeam] = useState('');
    const navigate = useNavigate('')
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('primaryTeam', inputPrimaryTeam)
        localStorage.setItem('secondTeam', inputSecondTeam)
    }
    return (
        <>

            <form className='w-full flex flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>
                <p className='text-2xl font-bold'>Edição dos nomes dos times</p>
                <div className="inputs flex gap-3">
                    <input className='border border-black text-center rounded' type="text" placeholder='Digite o Primeiro Time' value={inputPrimaryTeam}
                        onChange={e => setInputPrimaryTeam(e.target.value)} />
                    <input className='border border-black text-center rounded' type="text" placeholder='Digite o Segundo Time' value={inputSecondTeam}
                        onChange={e => setInputSecondTeam(e.target.value)} />
                </div>

                <button className='bg-black text-white px-4 py-1 rounded hover:bg-gray-600 ' type='submit'>Enviar</button>
            </form>

        </>

    )
}

export default EditOverlays;