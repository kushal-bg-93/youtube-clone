import millify from 'millify'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { YOUTUBE_VIDEO_STATISTICS } from '../utils/constants'
import videoCardConfig from '../utils/videoCardConfig'

const CommonVideoCard = ({cardData,videoId}) => {
    console.log('This is cardData>>',cardData)
    console.log('This is videoId>>',videoId)
    const [videoStatistics,setVideoStatistics]=useState()
    useEffect(()=>{
        getVideoStatistics()
    },[])

    let cardConfigId=useSelector(store=>store.videoCardSlice.cardConfigs.id)

    async function getVideoStatistics(){
        let data=await fetch(YOUTUBE_VIDEO_STATISTICS+videoId)
        data=await data.json();
        // console.log('This is video statistics>>',data)
        setVideoStatistics(data?.items[0]?.statistics)

    }
    const {title,thumbnails,channelTitle,channelId,publishedAt}=cardData
    const configs=videoCardConfig(cardConfigId)

    const {div1,div2,div3,div4,div5,h1,img,p1,p2,p3} = configs
  return (
      <Link to={"/watch?v="+videoId}>
    <div className={div1}>
        <div className={div2}>
            <div className={div3}>
                <img src={cardConfigId=='small'?thumbnails?.medium?.url:thumbnails?.high?.url} className={img} alt="thumbnail" />
            </div>
            <div className={div4}>
                <h1 className={h1}>{(title.length>50)?`${title.slice(0,49)}...`:title}</h1>
                <p className={p1}>{channelTitle}</p>
                <div className={div5}>

                <p className={p2}>{millify(videoStatistics?.viewCount)}</p>
                <p className={p3}>{moment(publishedAt).fromNow()}</p>
                </div>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default CommonVideoCard