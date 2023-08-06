import React, { useState } from 'react'
import useInfiniteScroll from '../utils/useInfiniteScroll';
import Comment from './Comment'

const CommentThread = ({comments,commentStatistics}) => {
    // console.log('This is comments',comments)
    // const {totalReplyCount}=comment?.snippet
    // const {authorDisplayName,authorProfileImageUrl,likeCount,publishedAt,textDisplay}=comment?.snippet?.topLevelComment?.snippet
  return (
    <div className='flex flex-col'>
        <div className="">
            <h1 className='text-lg'>{commentStatistics}  Comments</h1>
        </div>
        <div className="mt-4">
            {
                comments.map(comment=><div className='mt-8' key={comment?.id}><Comment authorDisplayName={comment?.snippet?.topLevelComment?.snippet?.authorDisplayName} authorProfileImageUrl={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} likeCount={comment?.snippet?.topLevelComment?.snippet?.likeCount} publishedAt={comment?.snippet?.topLevelComment?.snippet?.publishedAt} textDisplay={comment?.snippet?.topLevelComment?.snippet?.textDisplay} totalReplyCount={comment?.snippet?.totalReplyCount} id={comment.id}/></div>)
            }
        </div>

    </div>
  )
}

export default CommentThread