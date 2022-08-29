import React from 'react'
import {RiVideoAddFill} from 'react-icons/ri';
import {BiSearch} from "react-icons/bi"
import {CgMoreAlt } from "react-icons/cg"
import Contact from './Contact';

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-2 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill/>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch/>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt/>
                </div>
            </div>
        </div>
            
        <Contact 
        src="https://images.pexels.com/photos/12581576/pexels-photo-12581576.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" name="solomon christian" status='Online'/>
        <Contact 
        src="https://images.pexels.com/photos/13274548/pexels-photo-13274548.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" name="Adeola Oladeji " status='Offline'/>
        <Contact 
        src="https://images.pexels.com/photos/13025002/pexels-photo-13025002.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" name="Peculiar Godwin" status='Online'/>
        <Contact 
        src="https://images.pexels.com/photos/12581576/pexels-photo-12581576.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" name="Esther Jacinta" status='Online'/>
    </div>
  )
}

export default RightSidebar