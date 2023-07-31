import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import {CiSearch} from 'react-icons/ci'
import {BiSolidMicrophone,BiVideoPlus} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { toggle } from '../utils/slideBarSlice';

const Header = () => {

    const dispatch=useDispatch();
  return (
    <div className='flex justify-between items-center p-2 sticky top-0 w-full bg-white'>

        <div className="ml-3 col-span-1 flex items-center">
            <div onClick={()=>dispatch(toggle())} className="rounded-full p-3 cursor-pointer hover:bg-gray-100">

            <AiOutlineMenu className='text-2xl font-thin cursor-pointer'/>
            </div>
            <img className='h-14 ml-5 cursor-pointer' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="logo" />
            
        </div>

        <div className="col-span-8 w-2/5 text-center flex items-center">
            <input  className='border border-solid border-gray-300 px-4 py-2 w-3/4 rounded-l-full' type="text" />
            <button className='py-2 px-5 hover:bg-gray-300 rounded-r-full border border-solid border-gray-300 bg-gray-100'>
                <CiSearch className='text-center font-extralight text-gray-600 text-2xl'/>
            </button>
            <div className="rounded-full bg-gray-100 p-3 cursor-pointer hover:bg-gray-300 ml-3">

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