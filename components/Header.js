import Image from 'next/image'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';


function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);

    }

  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
        <Image 
            src='https://static.vecteezy.com/system/resources/previews/010/930/001/original/google-logo-icon-illustration-free-vector.jpg'
            height={40}
            width={120}
            className='cursor-pointer'
            alt=''
            onClick={() => router.push('/')}

        />

        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input type='text' ref={searchInputRef} className='flex-grow w-full focus:outline-none' defaultValue={router.query.term}/>
            <XMarkIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => {searchInputRef.current.value = ''}}
            />
             <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 px-2'/>
             <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
             <button hidden type='submit' onClick={search}>Search</button>
        </form>
        <Avatar className='ml-auto' url='https://c4.wallpaperflare.com/wallpaper/430/896/23/one-piece-roronoa-zoro-hd-wallpaper-preview.jpg'/>
        </div>
        
        {/* {Header options} */}
        <HeaderOptions />
        
    </header>
  )
}

export default Header