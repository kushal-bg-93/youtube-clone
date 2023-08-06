import React, { useEffect, useState } from 'react'
import moment from 'moment'
import millify from 'millify'

const VideoInfo = ({videoInfo,viewCount,publishedAt,channelInfo}) => {
    let [css,setCss]=useState("h-[45px] overflow-hidden")
    const [text,setText]=useState()
    const [more,setMore]=useState("...more")
    const [dateText,setDateText]=useState(moment(publishedAt).fromNow())
    const [viewsText,setViewsText]=useState(millify(viewCount))

    // console.log('This is channel information>>>',channelInfo)

    useEffect(()=>{
        replaceWithBr();
    },[])

    function replaceWithBr(){
        setText(videoInfo.replace(/\n/g, "<br />")) 
    }

    function setHeight(){
        (css=="h-[45px] overflow-hidden")?setCss("h-fit"):setCss("h-[45px] overflow-hidden")
        toggles();
    }

    function toggles(){
        (more=="...more")?setMore("show less"):setMore("...more")
        dateToggle();
        viewsToggle();
    }

    function dateToggle(){
        (dateText==moment(publishedAt).format('MMMM d YYYY'))?setDateText(moment(publishedAt).fromNow()):setDateText(moment(publishedAt).format('MMMM d YYYY'))
    }

    function viewsToggle(){
        (viewsText==millify(viewCount))?setViewsText(viewCount):setViewsText(millify(viewCount))
    }
    // console.log('This is video information>>>',statistics)
  return (

         <div className='ml-[0px] mb-4 flex flex-col items-start bg-gray-100 p-4 rounded-xl'>
             <div className="flex"><span className='font-medium text-sm'>{viewsText} views</span><span className='font-medium ml-3 text-sm'>{dateText}</span></div>

<div className={css}>
     <div dangerouslySetInnerHTML={{__html: text}}/>
     <hr className='my-8 border-[4px] border-solid border-gray-300 '/>
     <div className="flex my-5 items-center gap-4">
         <div className="">
             <img className='h-[90px]' src={channelInfo?.snippet?.thumbnails?.medium?.url} alt="" />
         </div>
         <div className="">
             <h1 className='font-semibold text-lg'>{channelInfo?.snippet?.title}</h1>
             <p className='font-light text-base'>{millify(channelInfo?.statistics?.subscriberCount)} subscribers</p>
         </div>
     </div>
     </div>
     <p className='cursor-pointer font-bold' onClick={()=>{setHeight()}}>{more}</p>
</div>
  )
}

export default VideoInfo