import React from 'react'
import { AiFillHome, AiOutlineLike, AiOutlineTrophy, AiOutlineBulb, AiFillYoutube } from 'react-icons/ai'
import { LiaFileVideo, LiaShoppingBagSolid } from 'react-icons/lia'
import { LuListVideo, LuGamepad2 } from 'react-icons/lu'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { GoHistory, GoGear } from 'react-icons/go'
import { BiTimeFive, BiHelpCircle } from 'react-icons/bi'
import { HiOutlineFire, HiOutlineNewspaper } from 'react-icons/hi'
import { PiMusicNoteLight } from 'react-icons/pi'
import { CiStreamOn } from 'react-icons/ci'
import { GiClapperboard, GiHanger } from 'react-icons/gi'
import { SiYoutubemusic } from 'react-icons/si'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { BsFlag } from 'react-icons/bs'
import { RiFeedbackLine } from 'react-icons/ri'
// import {IoGameControllerOutline} from 'react-icons/io'

const IconGenerator = ({ name }) => {
  switch (name) {
    case 'Home':
      return (
        <AiFillHome className='text-2xl' />
      );
      break;
    case 'Shorts':
      return (
        <LiaFileVideo className='text-2xl' />
      );
      break;
    case 'Subscriptions':
      return (
        <LuListVideo className='text-2xl' />
      )
      break;
    case 'Library':
      return (
        <MdOutlineVideoLibrary className='text-2xl' />
      )
      break;
    case 'History':
      return (
        <GoHistory className='text-2xl' />
      )
      break;
    case 'Watch Later':
      return (
        <BiTimeFive className='text-2xl' />
      )
      break;
    case 'Liked Videos':
      return (
        <AiOutlineLike className='text-2xl' />
      )
      break;
    case 'Trending':
      return (
        <HiOutlineFire className='text-2xl' />
      )
      break;
    case 'Shopping':
      return (
        <LiaShoppingBagSolid className='text-2xl' />
      )
      break;
    case 'Music':
      return (
        <PiMusicNoteLight className='text-2xl' />
      )
      break;
    case 'Live':
      return (
        <CiStreamOn className='text-2xl' />
      )
      break;
    case 'Gaming':
      return (

        <LuGamepad2 className='text-2xl' />
      )
      break;
    case 'Movies':
      return (

        <GiClapperboard className='text-2xl' />
      )
      break;
    case 'News':
      return (

        <HiOutlineNewspaper className='text-2xl' />
      )
      break;
    case 'Sports':
      return (

        <AiOutlineTrophy className='text-2xl' />
      )
      break;
    case 'Learning':
      return (

        <AiOutlineBulb className='text-2xl' />
      )
      break;
    case 'Fashion & Beauty':
      return (

        <GiHanger className='text-2xl' />
      )
      break;
    case 'YouTube Premium':
      return (

        <AiFillYoutube className='text-red-600 text-2xl' />
      )
      break;
    case 'YouTube Music':
      return (

        <SiYoutubemusic className='text-red-600 text-2xl' />
      )
      break;
    case 'YouTube Kids':
      return (

        <TbBrandYoutubeKids className='text-red-600 text-2xl' />
      )
      break;
    case 'Settings':
      return (

        <GoGear className='text-2xl' />
      )
      break;
    case 'Report History':
      return (

        <BsFlag className='text-2xl' />
      )
      break;
    case 'Help':
      return (

        <BiHelpCircle className='text-2xl' />
      )
      break;
    case 'Send Feedback':
      return (

        <RiFeedbackLine className='text-2xl' />
      )
      break;

  }
}

export default IconGenerator