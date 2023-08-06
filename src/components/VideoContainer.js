import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import useInfiniteScroll from '../utils/useInfiniteScroll';
import VideoCard from './VideoCard';
import VideoCardShimmer from './VideoCardShimmer';

const VideoContainer = () => {
    const [videoData,setVideoData]=useState([]);
    const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
    const [loadStatus,setLoadStatus]=useState(false)
    const [marginLeft,setMarginLeft]=useState("")
    const [nextPageToken,setNextPageToken]=useState()

    const slideBarStatus=useSelector(store=>store.slideBarStatus)

    // console.log('This is slideBarStatus>>>',slideBarStatus)

    useEffect(()=>{
        setData();
        
    },[])

    useEffect(()=>{

        //32-128px
        {slideBarStatus.value?setMarginLeft('ml-64'):setMarginLeft('ml-[69px]')}
    },[slideBarStatus.value])

    async function setData(){
        // console.log('This is url>>',YOUTUBE_VIDEO_API)
        const data=await fetch(YOUTUBE_VIDEO_API)
        const videoDataApi=await data.json();
        // console.log('This is videoDataApi>>>',videoDataApi)
        setNextPageToken(videoDataApi?.nextPageToken)
        setVideoData([videoDataApi]);
        // console.log('This is videoData>>>',videoData)
    }

    async function moreData(){

        if(nextPageToken!==null){

            setLoadStatus(true)
      
            // console.log('inside moreData>>')
            let data=await fetch(YOUTUBE_VIDEO_API+`&pageToken=${nextPageToken}`)
            data=await data.json();
            setNextPageToken(data?.nextPageToken?data?.nextPageToken:null)
            setVideoData([...videoData,data])
            // console.log('this is videoData>>',videoData)
            setIsFetching(false)
            setLoadStatus(false)
        }
    }

    // console.log('This is videoData>>>',videoData)
    
    return (videoData.length)?<div className='ml-2'>
        <div className={`overflow-y-scroll no-scrollbar ${marginLeft} h-[100%] mt-[3%] flex flex-wrap`}>
            {/* {console.log('This is videoData>>>>',videoData)} */}
            {
                
                videoData.map((videos,index)=>{

                    // console.log('this is videos>>',videos)

                   return <>
                   {
                   videos.items.map((video)=>{
                        // console.log("This is video>>>>>",video)
                        return <Link to={"/watch?v="+video?.id}><VideoCard key={video?.id} item={video}></VideoCard></Link>
                    })
                    }
                   </> 
                    
                })
            }
        </div>
        {loadStatus?<VideoCardShimmer numberOfCards={8}/>:""}
       
    </div>:<VideoCardShimmer numberOfCards={8}/>
}

export default VideoContainer