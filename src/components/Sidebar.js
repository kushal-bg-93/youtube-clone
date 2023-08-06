import React, { useEffect, useState } from 'react'
import IconGenerator from './IconGenerator'
import { Link, useLocation } from 'react-router-dom'

const firstMenuList = ["Home", "Shorts", "Subscriptions"]

const secondMenuList = ["Library", "History", "Watch Later", "Liked Videos"]

const explore = ["Trending", "Shopping", "Music", "Live", "Gaming", "Movies", "News", "Sports", "Learning", "Fashion & Beauty"]

const moreFromYoutube = ["YouTube Premium", "YouTube Music", "YouTube Kids"]

const settings = ["Settings", "Report History", "Help", "Send Feedback"]

// const test = `<h1 className=" text-3xl text-blue-900">Test</h1>`


const Sidebar = ({ minimisedSidebar }) => {

    const [top,setTop]=useState("")
    
    const location=useLocation()
    // console.log('Location path is>>',location.pathname)

    useEffect(()=>{
        location.pathname!=="/"?setTop("top-15"):setTop("top-32")
    },[location.pathname])
    // let top =location.pathname!=="/"?"top-4":"top-32"
    return minimisedSidebar ? (<div className={`fixed bg-white ${top} h-[92vh]`}>

        <ul>
            {


                firstMenuList.map((item,index) => {
                    return (
                        <div key={index} className='mt-5 z-40 rounded-lg p-1 cursor-pointer hover:bg-gray-100 flex flex-col items-center'>
                            <IconGenerator name={item} />

                            <li><h1 className='text-xs font-light'>{item}</h1></li>
                        </div>
                    )
                })

            }

        </ul>


    </div>) : (
        <div className={`w-64 z-40 p-2 fixed ${top} bg-white mx-4 h-[85vh] overflow-y-auto no-scrollbar`}>

            <ul>
                {/* first menu list  */}
                {
                    firstMenuList.map((item, index) => {
                        return (
                            <li key={index} className='text-center hover:bg-gray-100 hover:cursor-pointer rounded-lg w-full p-3 mt-2 '>
                                <div className="flex items-center">

                                    {item=='Home'?<Link to="/"><IconGenerator name={item} /></Link>:<IconGenerator name={item} />}
                                    <h1 className='ml-2 text-sm'>{item}</h1>
                                </div>
                            </li>
                        )
                    })
                }

                <hr className='border border-solid border-gray-200' />

                {/* second Menu list */}

                {
                    secondMenuList.map((item, index) => {
                        return (
                            <li key={index} className='text-center hover:bg-gray-100 hover:cursor-pointer rounded-lg w-full p-3 mt-2'>
                                <div className="flex items-center">
                                    <IconGenerator name={item} />
                                    <h1 className='ml-2 text-sm'>{item}</h1>
                                </div>
                            </li>
                        )
                    })
                }

                <hr className='border border-solid border-gray-200' />

                {/* explore  */}

                {
                    explore.map((item, index) => {
                        return (
                            <li key={index} className='text-center hover:bg-gray-100 hover:cursor-pointer rounded-lg w-full p-3 mt-2'>
                                <div className="flex items-center">
                                    <IconGenerator name={item} />
                                    <h1 className='ml-2 text-sm'>{item}</h1>
                                </div>
                            </li>
                        )
                    })
                }

                <hr className='border border-solid border-gray-200' />
                {/* more from youtube */}
                <h1 className='mt-4 text-center'>More from YouTube</h1>
                {
                    moreFromYoutube.map((item, index) => {
                        return (
                            <li key={index} className='text-center hover:bg-gray-100 hover:cursor-pointer rounded-lg w-full p-3 mt-2'>
                                <div className="flex items-center">
                                    <IconGenerator name={item} />
                                    <h1 className='ml-2 text-sm'>{item}</h1>
                                </div>
                            </li>
                        )
                    })
                }

                <hr className='border border-solid border-gray-200' />
                {
                    settings.map((item, index) => {
                        return (
                            <li key={index} className='text-center hover:bg-gray-100 hover:cursor-pointer rounded-lg w-full p-3 mt-2'>
                                <div className="flex items-center">
                                    <IconGenerator name={item} />
                                    <h1 className='ml-2 text-sm'>{item}</h1>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )
}

export default Sidebar