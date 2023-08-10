import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_FILTER_LIST } from '../utils/constants';
import { toggleConfig } from '../utils/videoCardSlice';
import CommonVideoList from './CommonVideoList';

const SearchPage = () => {
    const [searchResult,setSearchResult]=useState()
    let [searchParams]=useSearchParams();

    let dispatch=useDispatch()

    dispatch(toggleConfig('big'))

    useEffect(()=>{
        getSearchResult();
    },[searchParams])

    async function getSearchResult(){
        let data=await fetch(YOUTUBE_FILTER_LIST+`&q=${searchParams.get('searchQuery')}`)
        data=await data.json();
        console.log('This is search result>>>',data)
        setSearchResult(data?.items)
    }
  return (
    <div className='flex justify-center text-center w-[60%] border border-red-500 m-auto'>
        {searchResult && <CommonVideoList videos={searchResult}/>}
    </div>
  )
}

export default SearchPage