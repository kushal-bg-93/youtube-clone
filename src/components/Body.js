import React from 'react'
import { useSelector } from 'react-redux'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {
    const slideBarStatus=useSelector(store=>store.slideBarStatus)
    // console.log('This is slidebar status',slideBarStatus)
  return (
    <>
    <Header/>
    <div className='flex'>
        <div className="sticky">{slideBarStatus.value?<Sidebar/>:<Sidebar minimisedSidebar={true}/>}</div>
        <Outlet/>
        {/* <MainContainer/> */}
        
    </div>
    </>
  )
}

export default Body