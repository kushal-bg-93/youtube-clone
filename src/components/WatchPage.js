import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_CATEGORY_LIST, YOUTUBE_CHANNEL_INFO_API, YOUTUBE_COMMENT_THREAD, YOUTUBE_FILTER_LIST, YOUTUBE_VIDEO_INFO } from '../utils/constants';
import { minimize } from '../utils/slideBarSlice';
import useInfiniteScroll from '../utils/useInfiniteScroll';
import { toggleConfig } from '../utils/videoCardSlice';
import Button from './Button';
import ButtonList from './ButtonList';
import CommentThread from './CommentThread';
import CommonVideoCard from './CommonVideoCard';
import CommonVideoList from './CommonVideoList';
import VideoInfo from './VideoInfo';
import VideoTitle from './VideoTitle';


const WatchPage = () => {

  let [searchParams]=useSearchParams();
  const [videoInfoData,setVideoInfoData]=useState()
  const [channelInfoData,setChannelInfoData]=useState()
  const [commentsData,setCommentsData]=useState()
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
  const [loadStatus,setLoadStatus]=useState(false)
  const [commentsNextPageToken,setCommentsNextPageToken]=useState()
  const [filteredListNextPageToken,setFilteredListNextPageToken]=useState()
  const [filterList,setFilterList]=useState()
  const [idSelect,setIdSelect]=useState()
  const [filteredVideoList,setFilteredVideoList]=useState()

  const dispatch=useDispatch();
  let idS=useSelector(store=>store.buttonSlice.id)

  dispatch(minimize())
  dispatch(toggleConfig('small'))

  useEffect(()=>{
    setVideoInfo()
    getFilterList();
  },[searchParams])

  useEffect(()=>{
    getFilteredVideoResult();
  },[idS])



  useEffect(()=>{
    if(videoInfoData){
      setChannelInfo()
      setComments()
    }
  },[videoInfoData])

  async function getFilteredVideoResult(){
    let filterString=(idS=="all")?"":"&videoCategoryId="+idS
    let url=`${YOUTUBE_FILTER_LIST+filterString}`
    let data=await fetch(url)
    data=await data.json()
    setFilteredListNextPageToken(data?.nextPageToken)
    // console.log('This is filtered result',data)
    setFilteredVideoList(data?.items)
  }

  async function getFilterList(){
    let data=await fetch(YOUTUBE_CATEGORY_LIST)
    data=await data.json()
    // console.log('This is categoryList>>>',data)
    setFilterList(data?.items)
  }

  async function moreData(){

    if(commentsNextPageToken!==null || filteredListNextPageToken!==null){

        setLoadStatus(true)

        if(commentsNextPageToken!==null){

          // console.log('inside moreData>>')
          let data=await fetch(YOUTUBE_COMMENT_THREAD+videoInfoData[0]?.id+`&pageToken=${commentsNextPageToken}`)
          data=await data.json();
          // console.log('This is more data>>>>',data)
          setCommentsNextPageToken(data?.nextPageToken?data?.nextPageToken:null)
          setCommentsData([...commentsData,...data?.items])
          // if(data?.items) console.log('This is comments after appending',commentsData)
          // console.log('this is videoData>>',videoData)
        }
        if(filteredListNextPageToken!==null){
          let filterString=(idS=="all")?"":"&videoCategoryId="+idS+`&pageToken=${filteredListNextPageToken}`
          let url=`${YOUTUBE_FILTER_LIST+filterString}`
          let data=await fetch(url)
          data=await data.json()
          setFilteredListNextPageToken(data?.nextPageToken)
          setFilteredVideoList([...filteredVideoList,...data?.items])
        }
  
        setIsFetching(false)
        setLoadStatus(false)
    }
}

  const setComments=async()=>{
    let data= await fetch(YOUTUBE_COMMENT_THREAD+videoInfoData[0]?.id)
    data=await data.json();
    // console.log('This is comments data>>>',data)
    setCommentsNextPageToken(data?.nextPageToken)
    setCommentsData(data?.items)
  }

  const setChannelInfo=async()=>{

    const id=videoInfoData[0]?.snippet?.channelId.toString()
    let data=await fetch(YOUTUBE_CHANNEL_INFO_API+id)
    
    data=await data.json();
    // console.log('This is data>>>>',id)
    setChannelInfoData(data?.items)
  }

  const setVideoInfo=async()=>{
    let data=await fetch(YOUTUBE_VIDEO_INFO+searchParams.get('v'))

    data=await data.json();

    // console.log("This is data>>>",data)

    setVideoInfoData(data?.items)

    // console.log("This is video info data>>>",videoInfoData)
  }

    function replaceWithBr(){

        return test.replace(/\n/g, "<br />")
    }


  return (videoInfoData && channelInfoData && commentsData)?(
    <div className='flex'>
    <div className='ml-[100px] mt-[30px]  w-[1300px]'>
        <div className="pt-[56.25]">
          {/* {console.log('This is videoInfoData>>>',videoInfoData)} */}
        <ReactPlayer className="top-0 left-0" width="1300px" height="700px" playing={true} controls={true} url={'https://www.youtube.com/watch?v='+searchParams.get("v")} />

        </div>
        <div className='w-[1300px]'>
        <div className="">
          <VideoTitle videoInfo={videoInfoData} channelInfo={channelInfoData}/>
        </div>

        <div className="">
          <VideoInfo videoInfo={videoInfoData[0]?.snippet?.description} viewCount={videoInfoData[0]?.statistics?.viewCount} publishedAt={videoInfoData[0]?.snippet?.publishedAt} channelInfo={channelInfoData[0]}/>
        </div>


        <div className="">
          <CommentThread comments={commentsData} commentStatistics={videoInfoData[0]?.statistics?.commentCount}/>
        </div>

        </div>
        
        {/* <p className='link-display' dangerouslySetInnerHTML={{__html: replaceWithBr()}}/> */}

        {/* {channelInfoData?console.log('Channel data rendered',channelInfoData):console.log('Channel data not rendered')} */}
            
    </div>
    <div className="flex flex-col w-[400px] p-3">
    {
      filterList&&<div><ButtonList data={filterList}/></div>
    }
    <div>
      {filteredVideoList&&<CommonVideoList videos={filteredVideoList}/>}
    </div>
    </div>
    </div>
  ):(<>Not Rendered</>)
}

export default WatchPage