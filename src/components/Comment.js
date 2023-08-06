import millify from 'millify'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENT_REPLY } from '../utils/constants'
import IconGenerator from './IconGenerator'

const Comment = ({authorDisplayName,authorProfileImageUrl,likeCount,publishedAt,textDisplay,totalReplyCount,id}) => {
    // console.log('This is totalReplyCount',totalReplyCount)
    const [replyStatus,setReplyStatus]=useState(false)
    const [replyData,setReplyData]=useState()

    // console.log('This is comment>>>>',comment)
    // const {totalReplyCount}=comment?.snippet
    // const {authorDisplayName,authorProfileImageUrl,likeCount,publishedAt,textDisplay}=comment?.snippet?.topLevelComment?.snippet

    useEffect(()=>{
        if(totalReplyCount>0){
            setReply();
        }
    },[])

    const setReply=async ()=>{
        if(id){
            let data=await fetch(YOUTUBE_COMMENT_REPLY+id)
            data=await data.json()
            // console.log("This is replies>>>",data)
            setReplyData(data)
        }
    }
  return (
    <div>
        <div className="flex">
                <div>
                    <img className={(id==undefined)?'rounded-full w-[25px] h-[25px]':'rounded-full'} src={authorProfileImageUrl} alt="" />
                </div>
                <div className="flex flex-col ml-4 justify-start">
                   <div className="flex items-center gap-3"> <p className='text-xs font-semibold'>{authorDisplayName}</p> <p className='text-xs text-gray-600'>{moment(publishedAt).fromNow()}</p></div>
                    <p className='text-sm mt-1' dangerouslySetInnerHTML={{__html: textDisplay}}/>
                    <div className="mt-3 flex items-center">
                        <IconGenerator name="like"/>
                        <p className='text-xs text-gray-600 ml-2 mr-4'>{millify(likeCount)}</p>
                        
                        <IconGenerator name="dislike"/>

                    </div>
                    {
                        (totalReplyCount>0)&&(
                            <div className='mt-4 cursor-pointer hover:bg-blue-100 px-2 py-2 justify-center w-fit rounded-2xl flex' onClick={()=>{(replyStatus)?setReplyStatus(false):setReplyStatus(true)}}>
                            <IconGenerator name={(!replyStatus)?"down":"up"}/>
                            <p className='text-blue-500 text-sm font-bold ml-2'>{totalReplyCount} replies</p>
                            
                            </div>
                        )
                    }
                    {
                        <div className="flex flex-col mt-1">
                        {replyStatus&&replyData?.items.map(reply=>{
                           return (<div className='mt-6'>
                            {/* {console.log('This is reply',reply)} */}
                            {/* <Comment authorDisplayName={"sam"} likeCount="3" textDisplay={"reoo"}/> */}
                           <Comment authorDisplayName={reply?.snippet?.authorDisplayName} authorProfileImageUrl={reply?.snippet?.authorProfileImageUrl} likeCount={(reply?.snippet?.likeCount!=0)?reply?.snippet?.likeCount!=0:""} publishedAt={reply?.snippet?.publishedAt} textDisplay={reply?.snippet?.textDisplay} />
                            </div>)
                            
                        })}
                        </div>
                    }

                </div>
        </div>
    </div>
  )
}

export default Comment