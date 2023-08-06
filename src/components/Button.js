import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { select } from '../utils/ButtonSlice'

const Button = ({name,filter,id}) => {

  let idSlice=useSelector(store=>store.buttonSlice.id)
  let dispatch=useDispatch()
  // console.log('This is key',id)
  return (
    <div className='ml-3'>
        {filter?<button className={`text-sm w-max p-2 ${idSlice==id?'bg-black text-white hover:opacity-80':'bg-gray-100 hover:bg-gray-300'} rounded-lg`} onClick={()=>{dispatch(select(id))}}>{name}</button>:<button className='text-sm w-auto p-2 bg-gray-100 rounded-lg hover:bg-gray-300'>{name}</button>}
    </div>
  )
}

export default Button