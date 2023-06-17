'use client'
import Link from 'next/link'
import React from 'react'
import { FaUserAlt, FaLock, FaArrowCircleLeft } from 'react-icons/fa'

export default function Login() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log({ username, password })

        window.location.href ='/dashboard'
    }
    return (
        <div className='flex flex-col justify-center items-center w-ful h-screen'>
            <form
                onSubmit={onSubmit}
                className='w-full max-w-lg h-[500px] bg-gray-800 rounded-lg'
            >
                <div className='flex justify-center items-center bg-gray-950 p-4 rounded-lg'>
                    <h1 className='text-gray-400 font-semibold'>LOGIN</h1>
                </div>

                <div className='flex flex-col items-center justify-center w-full h-max p-8'>
                    <label htmlFor="username" className='flex items-center relative mt-8'>
                        <span className='text-orange-500 uppercase absolute left-4'>
                            <FaUserAlt />
                        </span>
                        <input
                            type="text"
                            name='username'
                            id='username'
                            value={username}
                            placeholder='username'
                            onChange={event => setUsername(event.target.value)}
                            className='h-12 bg-transparent border-b-2 border-b-orange-500 pl-12 text-orange-200 focus:border-2 focus:border-orange-500'
                        />
                    </label>
                    <label htmlFor="password" className='flex items-center relative mt-8'>
                        <span className='text-orange-500 uppercase absolute left-4'>
                            <FaLock />
                        </span>
                        <input
                            type="text"
                            name='password'
                            id='password'
                            value={password}
                            placeholder='password'
                            onChange={event => setPassword(event.target.value)}
                            className='h-12 bg-transparent border-b-2 border-b-orange-500 pl-12 text-orange-200 focus:border-2 focus:border-orange-500'
                        />
                    </label>
                    <button
                        type='submit'
                        className='text-white bg-orange-500 mt-12 py-4 px-8 rounded-lg w-full hover:bg-orange-300 focus:border-2 focus:border-orange-600'
                    >
                        submit
                    </button>

                    <Link href={`/`}>
                        <div className='flex justify-center items-center text-orange-200 mt-4 hover:text-orange-50'>
                            <FaArrowCircleLeft />
                            <span className=' ml-2'>Back to home</span>
                        </div>
                    </Link>
                </div>
            </form>
        </div>
    )
}