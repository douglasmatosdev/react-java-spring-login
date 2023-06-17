import Link from 'next/link'

export default function Home() {
  return (
    <main className='w-full h-screen'>
      <nav className='w-full h-12 bg-white'>
        <ul className='w-full h-full flex items-center justify-between border bottom-1 p-16'>
          <li className='flex-1 cursor-pointer'>
            <div className='rounded-[100%] bg-gray-800 w-16 h-16 flex justify-center items-center'>
              <span className='text-white'>BRAND</span>
            </div>
          </li>
          <li className='mr-9 text-gray-900 hover:text-gray-500 cursor-pointer hover:underline'>
            <div>
              <span>HOME</span>
            </div>
          </li>
          <li className='mr-9 text-gray-900 hover:text-gray-500 cursor-pointer hover:underline'>
            <div>
              <Link href={`/login`}>
                <span>LOGIN</span>
              </Link>
            </div>
          </li>
          <li className='mr-9 text-gray-900 hover:text-gray-500 cursor-pointer hover:underline'>
            <div>
              <span>SIGNUP</span>
            </div>
          </li>
        </ul>
      </nav>
    </main>
  )
}
