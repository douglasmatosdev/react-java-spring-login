import Link from "next/link"
import React from "react"
import { FaArrowCircleLeft } from "react-icons/fa"

export default function Dashboard() {
    return (
        <div className="w-full h-screen bg-gray-900 flex">
            <aside className="flex flex-col bg-gray-800 w-[33%] h-screen">
                <div className="text-center border-b-2 border-orange-500 p-8 flex justify-center items-center">
                    <div className="w-[100px] h-[100px] rounded-[100%] bg-gray-500 flex justify-center items-center shadow-md shadow-orange-700 border-2 border-orange-500">
                        <h1 className='text-gray-400 font-semibold uppercase'>brand</h1>
                    </div>
                </div>
                <ul className="flex flex-col w-full h-full p-8 border boder-white">
                    <li className="mt-8">
                        <div>
                            <span className="text-orange-300 text-lg">John Due</span>
                        </div>
                    </li>
                    <li className="mt-8">
                        <div>
                            <span className="text-orange-300 text-lg">description</span>
                        </div>
                    </li>
                    <li className="mt-8">
                        <Link href={`/`}>
                            <div className='flex justify-center items-center text-orange-200 mt-4 hover:text-orange-50'>
                                <FaArrowCircleLeft />
                                <span className=' ml-2'>Back to home</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </aside>
            <section className="flex flex-col bg-gray-700 flex-1 h-screen">

            </section>
        </div>
    )
}