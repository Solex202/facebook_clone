import React from 'react'


const Post = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-white mt-6 rounded-md p-4 '>
            <div className='flex items-center'>
                <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                className='rounded-full w-10 h-10 '/>
                <div>
                    <p className='font-medium '>Solomon Christian</p>
                    {/* <p className='text-xs text-gray-500'>{new Date().toLocaleString()}</p> */}
                </div>
            </div>
            <p className='py-4'>Lorem Ipsum</p>
        </div>
        <div className='relative h-60 md:h-96 bg-white '>
            <img src='https://images.pexels.com/photos/12581576/pexels-photo-12581576.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'/>
        </div>
    </div>
  )
}

export default Post