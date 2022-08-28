import React from 'react'
import Image from "next/image";
import {ImUsers} from "react-icons/im"

import Sidebaritems from './Sidebaritems';
import {MdGroups, MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md"
import {AiOutlineShop} from "react-icons/ai"
import {BsStopwatch} from "react-icons/bs"
import {useSession} from "next-auth/react"

const Sidebar = () => {
  const {data: session} = useSession();
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
        <div className='flex items-center space-x-2 py-3 pl-4
        hover:bg-gray-200 rounded-l-xl cursor-pointer'>
            <Image
            src={session?.user.image}
            height={40}
            width={40} 
            className="rounded-full cursor-pointer"/>
            <p className='hidden sm:inline-flex font-medium'>{" "} {session?.user.name}</p>
            
        </div>
        <Sidebaritems Icon={ImUsers} value="Friends"/>
        <Sidebaritems Icon={MdGroups} value="Groups"/>
        <Sidebaritems Icon={AiOutlineShop} value="Marketplace"/>
        <Sidebaritems Icon={MdOutlineOndemandVideo} value="Watch"/>
        <Sidebaritems Icon={BsStopwatch} value="Memories"/>

        <Sidebaritems Icon={MdOutlineExpandMore} value="See More"/>
    </div>
  )
}

export default Sidebar