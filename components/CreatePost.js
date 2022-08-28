import React from 'react'
import Image from "next/image";
import {useSession} from "next-auth/react"
import {HiOutlineVideoCamera} from "react-icons/hi"
import {IoMdPhotos} from "react-icons/io"
import {BsEmojiSmile} from "react-icons/bs"


const CreatePost = () => {
    const {data: session} = useSession();
  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2'>
        <div className='flex p-4 space-x-2 items-center'>
        <Image
        src={session?.user.image}
            height={40}
            width={40} className="rounded-full cursor-pointer"/>
            <form className='flex flex-1'>
                <input className='rounded-full h-12 flex-grow focus: outline-none font-medium bg-gray-100 px-4'
                type="text" placeholder={`What's on your mind , ${session?.user.name}?`}></input>
                <button hidden></button>
            </form>
        </div>
        <div className='flex justify-evenly py-2'>
            <div className='flex items-center p-1 space-x-1 flex-grow justify-center'>
                <HiOutlineVideoCamera size={20} className="text-red-500"/>
                <p>Live Video</p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost