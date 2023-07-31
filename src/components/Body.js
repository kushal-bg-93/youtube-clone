import React from 'react'
import { useSelector } from 'react-redux'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
    const slideBarStatus=useSelector(store=>store.slideBarStatus)
    console.log('This is slidebar status',slideBarStatus)
  return (
    <div className='flex'>
        {slideBarStatus.value?<Sidebar/>:<Sidebar minimisedSidebar={true}/>}
        <MainContainer/>
    </div>
  )
}

export default Body