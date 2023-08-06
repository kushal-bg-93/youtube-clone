import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { select } from '../utils/ButtonSlice'
import Button from './Button'

const listNames=["All","Music","Sitcoms","Game shows","Trailers","News","Live","Cinema","Bollywood Music","Sketch comedy","Gaming","Mantras","Science","Cars","Recently Uploaded","New to you"]


const ButtonList = ({data}) => {
  const [bgColor,setBgColor]=useState()
  
  let width=data?"w-[400px]":"w-[100%]"

  // console.log('This is data',data)
  let list=data?data:listNames
  // useEffect(()=>{
  //   if(data){  
  //     list&&list.push({id:"all",snippet:{title:"All"}})
  //   }
  // },[])
  let id=useSelector(store=>store.buttonSlice.id)
  let dispatch=useDispatch()

  // console.log('This is id>>>',id)
  return (
    <div className={`${data?"ml-1 mt-4":"fixed"} flex justify-between ${width}  p-3 overflow-x-auto bg-white no-scrollbar`}>
      {data&&<button className={`text-sm w-max p-2 ${id=='all'?'bg-black text-white hover:opacity-80':'bg-gray-100 hover:bg-gray-300'} rounded-lg `} onClick={()=>{dispatch(select("all"))}}>All</button>}
      {
        list.map((item,index)=>{
          // console.log('This is item>>',item)
          return data?(<Button key={item?.id} name={item?.snippet?.title} filter={true} id={item?.id}/>):(<Button key={index} name={item}/>)
        })
      }
      
    </div>
  )
}

export default ButtonList