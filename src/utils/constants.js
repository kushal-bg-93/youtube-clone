const API_KEY="AIzaSyDVH5uuB4EOTj6oyUON-5hWPFn83Y24OxA"


export const YOUTUBE_VIDEO_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=12&key=${API_KEY}`

export const YOUTUBE_VIDEO_INFO=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`

export const YOUTUBE_CHANNEL_INFO_API=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${API_KEY}&id=`

export const YOUTUBE_COMMENT_THREAD=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${API_KEY}&videoId=`

export const YOUTUBE_COMMENT_REPLY=`https://youtube.googleapis.com/youtube/v3/comments?part=snippet&key=${API_KEY}&parentId=`

export const YOUTUBE_CATEGORY_LIST=`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${API_KEY}`

export const YOUTUBE_FILTER_LIST=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=IN&type=video&key=${API_KEY}`

export const YOUTUBE_VIDEO_STATISTICS=`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&key=${API_KEY}&id=`

export const YOUTUBE_AUTO_SUGGEST=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&regionCode=IN&type=video&fields=items(id(channelId%2CvideoId)%2Csnippet(thumbnails,title,channelTitle))%2CnextPageToken%2CpageInfo%2CprevPageToken&key=${API_KEY}&q=`

// export const YOUTUBE_AUTO_SUGGEST=`http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&key=${API_KEY}&q=`
