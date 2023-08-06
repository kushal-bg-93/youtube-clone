import React from 'react'
import CommonVideoCard from './CommonVideoCard'

const CommonVideoList = ({videos}) => {
    console.log('This is videos',videos)
  return (
    <div>
        {
            videos.map(video=>{
                return (
                    <CommonVideoCard cardData={video?.snippet} videoId={video?.id?.videoId}/>
                )
            })
        }
    </div>
  )
}

export default CommonVideoList