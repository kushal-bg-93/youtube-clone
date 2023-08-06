import React,{useEffect, useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import {CiSearch} from 'react-icons/ci'
import {BiSolidMicrophone,BiVideoPlus} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../utils/slideBarSlice';
import App from '../App';
import { YOUTUBE_AUTO_SUGGEST } from '../utils/constants';
import { setAutoSuggestions } from '../utils/autoSuggestionSlice';

const Header = () => {

    const dispatch=useDispatch();
    const [searchText,setSearchText]=useState()
    const [searchResults,setSearchResults]=useState()
    const autoSuggestionResults=useSelector(store=>store.autoSuggestion.result)
    const [searchResultStatus,setSearchResultStatus]=useState(false)
    const [navStatus,setNavStatus]=useState(false)
    const [nextPageToken,setNextPageToken]=useState()
    const [prevPageToken,setPrevPageToken]=useState()

    // console.log('This is auto suggestion>>',autoSuggestionResults)

    useEffect(()=>{
        let timer=setTimeout(()=>{getAutoSuggestion()},200)
        
        return ()=>clearTimeout(timer)
    },[searchText,searchResults])

    async function getAutoSuggestion(){
        if(searchText){
            if(!autoSuggestionResults[searchText]){
                let searchRes={}
                
                // console.log('url>>',searchText)
                
                let data=await fetch(YOUTUBE_AUTO_SUGGEST+searchText)
                data=await data.json();
                console.log('This is autosuggest data>>',data)
                if(data?.nextPageToken){
                    setNextPageToken(data?.nextPageToken)
                }
                if(data?.prevPageToken){
                    setPrevPageToken(data?.prevPageToken)
                }
                searchRes[searchText]=data?.items
                dispatch(setAutoSuggestions(searchRes))
                console.log('This is autosuggestion>>>',data)
            }
            setSearchResults(autoSuggestionResults[searchText])

        }
    }

    async function getSearchPageData(prevToken,nextToken){
        setNavStatus(true)
        let token=prevToken?prevToken:nextToken
        let data=await fetch(YOUTUBE_AUTO_SUGGEST+searchText+'&pageToken='+token)
        data=await data.json()
        console.log('This is pagination auto suggest>>',data)
    }

  return (
    <div className='flex justify-between items-center p-2 sticky top-0 z-50 w-full bg-white'>

        <div className="ml-3 col-span-1 flex items-center">
            <div onClick={()=>dispatch(toggle())} className="rounded-full p-3 cursor-pointer hover:bg-gray-100">

            <AiOutlineMenu className='text-2xl font-thin cursor-pointer'/>
            </div>
                <a href="/"><img className='h-14 ml-5 cursor-pointer' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" /></a>
               
        </div>

        <div className="col-span-8 w-[40%] text-center flex items-center">
            <div className="flex items-center w-[100%]">
            <div className="flex flex-col w-full">
            <input className='border border-solid border-gray-300 px-4 py-2 w-[100%] rounded-l-full' type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} onFocus={()=>{setSearchResultStatus(navStatus?false:true)}} onBlur={()=>{setSearchResultStatus(true)}}/>
            {(searchResultStatus&&searchResults)?<div className="bg-white p-4 mt-[2.6rem] shadow-lg border-x border-b border-solid border-gray-300 w-[600px] rounded-lg fixed z-50">
                <ul className='text-left'>
                    {
                        // console.log('This is autoSuggestion results>>>',autoSuggestionResults)
                    searchResults.map(suggestion=>{
                        return (
                        <a href={'/watch?v='+suggestion?.id?.videoId}>    
                        <div className="flex mt-4 items-center gap-4">
                            <img src={suggestion?.snippet?.thumbnails?.default?.url} className="h-[50px] w-[70px] object-cover" alt="" />
                    <li>{((suggestion?.snippet?.title.length)>60)?suggestion?.snippet?.title.slice(0,59)+'...':suggestion?.snippet?.title}</li>
                    </div></a>
                        )
                    })
                    }
                    

                </ul>
                {/* <div className="flex mt-4 gap-3 justify-center">
                    <p className={prevPageToken?'text-blue-500 cursor-pointer':'text-gray-500 cursor-none'}>{'<'}</p>
                    <p className={nextPageToken?'text-blue-500 cursor-pointer':'text-gray-500 cursor-none'} onClick={()=>{getSearchPageData(null,nextPageToken)}}>{'>'}</p>
                </div> */}
            </div>:""}

            </div>
            <a href={"/search?searchQuery="+searchText}><button className='py-2 px-5 hover:bg-gray-300 rounded-r-full border border-solid border-gray-300 bg-gray-100'>
                <CiSearch className='text-center font-extralight text-gray-600 text-2xl'/>
            </button></a>
            </div>
            <div className="rounded-full bg-gray-100 p-3 cursor-pointer hover:bg-gray-300 ml-4">

            <BiSolidMicrophone className='text-2xl font-thin text-gray-600'/>
            </div>
        </div>
        <div className="col-span-3 flex items-center gap-1">
            <div className="rounded-full p-3 cursor-pointer hover:bg-gray-100 ml-3">
            <BiVideoPlus className='text-2xl font-thin text-gray-600'/>
            </div>

            <div className="rounded-full p-3 cursor-pointer hover:bg-gray-100 ml-3">
            <IoMdNotificationsOutline className='text-2xl font-thin text-gray-600'/>
            </div>

<div className="p-3 cursor-pointer mr-3">
            <FaUserCircle className='text-3xl text-blue-700'/>
            </div>
        </div>

    </div>
  )
}

export default Header