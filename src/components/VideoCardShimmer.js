import React from 'react'

const VideoCardShimmer = ({numberOfCards}) => {
  return (
    <div className='mt-[4%] flex flex-wrap ml-[250px]'>

        {
            [...Array(numberOfCards)].map(()=>{
         return (<div className=' w-[300px] ml-14 h-[350px]'>
             <div className="w-[100%] bg-gray-200 h-[50%] rounded-2xl"></div>
             <div className="mt-4 w-[100%] h-16 bg-gray-200 rounded-2xl"></div>
             <div className="mt-2 w-[35%] h-4 bg-gray-200 rounded-2xl"></div>
             <div className="mt-2 w-[45%] h-4 bg-gray-200 rounded-2xl"></div>
        </div>)
            })
        }
    
    </div>
  )
}

export default VideoCardShimmer