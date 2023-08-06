import React from 'react'
import { useSelector } from 'react-redux'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
    const slideBarStatus=useSelector(store=>store.slideBarStatus)
    // console.log('This is slidebar status',slideBarStatus)
  return (
    <div className='flex'>
        <div className="sticky">{slideBarStatus.value?<Sidebar/>:<Sidebar minimisedSidebar={true}/>}</div>
        <Outlet/>
        {/* <MainContainer/> */}
        
    </div>
  )
}

export default Body