import React, { useState,useEffect } from 'react'
import millify from 'millify';
import { useSelector } from 'react-redux';

const VideoCard = ({item}) => {

  const {id,contentDetails,snippet,statistics}=item; 
  let title=snippet?.title

  const [width,setWidth]=useState("")

  const slideBarStatus=useSelector(store=>store.slideBarStatus);
  useEffect(()=>{

    //32-128px
    {slideBarStatus.value?setWidth('w-[350px]'):setWidth('w-[400px]')}
},[slideBarStatus.value])

  title=title.trim().length>75?title.slice(0,76)+"...":title;

  // console.log('This is item>>>>',item)
  return (
    <div className={`m-3 p-3 ${width} cursor-pointer`}>
      <div className="">
      <img src={snippet?.thumbnails?.standard?.url} alt="thumbnail" className='rounded-2xl w-[480px] h-[200px]  object-cover' />
      </div>
      <div className="m-3">
        <h1 className='font-semibold'>{title}</h1>
        <div className="mt-1">
        <p className='text-gray-500 text-base'>{snippet?.channelTitle}</p>
        <p className='text-gray-500 text-base'>{millify(parseInt(statistics?.viewCount))} views</p>

        </div>
      </div>

    </div>
  )
}

export default VideoCard