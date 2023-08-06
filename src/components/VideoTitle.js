import React from 'react'
import millify from 'millify'
import IconGenerator from './IconGenerator'

const VideoTitle = ({videoInfo,channelInfo}) => {
    // console.log('Video info>>',videoInfo)
    // console.log("Channel info>>>>",channelInfo)

    const videoDetails=videoInfo[0]?.snippet
    const channelDetails=channelInfo[0]?.snippet
    const channelStatistics=channelInfo[0]?.statistics
    const videoStatistics=videoInfo[0]?.statistics


  return (
    <div className='my-4'>
        <h1 className='font-bold text-xl'>{videoDetails?.localized?.title}</h1>
        <div className="flex items-center justify-between">
            <div className="flex mt-3 items-center">
                <img src={channelDetails?.thumbnails?.default?.url} alt="channelThumbnail" className='w-9 h-9' />
                <div className="flex flex-col ml-2">
                    <h1 className='font-medium'>{channelDetails?.title}</h1>
                    <p className='text-xs text-gray-500'>{millify(channelStatistics?.subscriberCount)} subscribers</p>
                </div>
                <button className='bg-black hover:opacity-[0.85] text-white rounded-3xl px-4 py-2 cursor-pointer ml-6'>Subscribe</button>
            </div>
            <div className="flex">
                
                    <div className='flex items-center py-2 pl-4 bg-gray-100 hover:bg-gray-200 rounded-l-2xl'>
                        <div className="flex items-center cursor-pointer ">
                    <IconGenerator name="like"/>
                    <p className='font-medium text-[14px] ml-2'>{millify(videoStatistics?.likeCount)}</p>

                        </div>
                    <p className='text-gray-300 ml-2 font-thin'>|</p>
                    <div className="cursor-pointer"></div>
                    </div>

                    <div className='flex items-center py-1 px-4 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-r-2xl'>
                        <IconGenerator name="dislike"/>
                    </div>

                    <div className="ml-6 flex item-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-2xl cursor-pointer">
                        <IconGenerator name="share"/>
                        <p className='font-medium text-[14px] ml-2 text-center'>Share</p>
                    </div>

                    <div className="ml-6 flex item-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-2xl cursor-pointer">
                        <IconGenerator name="download"/>
                        <p className='font-medium text-[14px] ml-2 text-center'>Download</p>
                    </div> 
            </div>
        </div>
    </div>
  )
}

export default VideoTitle