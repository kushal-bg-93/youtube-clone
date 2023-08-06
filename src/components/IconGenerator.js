import React from 'react'
import { AiFillHome, AiOutlineLike, AiOutlineTrophy, AiOutlineBulb, AiFillYoutube, AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { LiaFileVideo, LiaShoppingBagSolid } from 'react-icons/lia'
import { LuListVideo, LuGamepad2 } from 'react-icons/lu'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { GoHistory, GoGear } from 'react-icons/go'
import { BiTimeFive, BiHelpCircle } from 'react-icons/bi'
import { HiOutlineFire, HiOutlineNewspaper } from 'react-icons/hi'
import { PiMusicNoteLight,PiShareFatThin,PiDownloadSimpleLight } from 'react-icons/pi'
import { CiStreamOn } from 'react-icons/ci'
import { GiClapperboard, GiHanger } from 'react-icons/gi'
import { SiYoutubemusic } from 'react-icons/si'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { BsFlag } from 'react-icons/bs'
import { RiFeedbackLine } from 'react-icons/ri'
import {GrLike,GrDislike} from 'react-icons/gr'
// import {IoGameControllerOutline} from 'react-icons/io'

const IconGenerator = ({ name }) => {
  switch (name) {
    case 'Home':
      return (
        <AiFillHome className='text-2xl text-black' />
      );
    case 'Shorts':
      return (
        <LiaFileVideo className='text-2xl' />
      );
    case 'Subscriptions':
      return (
        <LuListVideo className='text-2xl' />
      );
    case 'Library':
      return (
        <MdOutlineVideoLibrary className='text-2xl' />
      );
    case 'History':
      return (
        <GoHistory className='text-2xl' />
      );
    case 'Watch Later':
      return (
        <BiTimeFive className='text-2xl' />
      );
    case 'Liked Videos':
      return (
        <AiOutlineLike className='text-2xl' />
      );
    case 'Trending':
      return (
        <HiOutlineFire className='text-2xl' />
      );
    case 'Shopping':
      return (
        <LiaShoppingBagSolid className='text-2xl' />
      );
    case 'Music':
      return (
        <PiMusicNoteLight className='text-2xl' />
      );
    case 'Live':
      return (
        <CiStreamOn className='text-2xl' />
      );
    case 'Gaming':
      return (

        <LuGamepad2 className='text-2xl' />
      );
    case 'Movies':
      return (

        <GiClapperboard className='text-2xl' />
      );
    case 'News':
      return (

        <HiOutlineNewspaper className='text-2xl' />
      );
    case 'Sports':
      return (

        <AiOutlineTrophy className='text-2xl' />
      );
    case 'Learning':
      return (

        <AiOutlineBulb className='text-2xl' />
      );
    case 'Fashion & Beauty':
      return (

        <GiHanger className='text-2xl' />
      );
    case 'YouTube Premium':
      return (

        <AiFillYoutube className='text-red-600 text-2xl' />
      );
    case 'YouTube Music':
      return (

        <SiYoutubemusic className='text-red-600 text-2xl' />
      );
    case 'YouTube Kids':
      return (

        <TbBrandYoutubeKids className='text-red-600 text-2xl' />
      );
    case 'Settings':
      return (

        <GoGear className='text-2xl' />
      );
    case 'Report History':
      return (

        <BsFlag className='text-2xl' />
      );
    case 'Help':
      return (

        <BiHelpCircle className='text-2xl' />
      );
    case 'Send Feedback':
      return (

        <RiFeedbackLine className='text-2xl' />
      );

      case 'like':
        return (
          <GrLike className='cursor-pointer text-lg font-thin'/>
        );

        case 'dislike':
          return (
            <GrDislike className='text-lg cursor-pointer'/>
          );
          case 'share':
          return (
            <PiShareFatThin className='text-2xl'/>
          );
          case 'download':
          return (
            <PiDownloadSimpleLight className='text-2xl'/>
          );
          case 'down':
          return (
            <AiOutlineDown className='text-xl text-blue-500'/>
          );

          case 'up':
          return (
            <AiOutlineUp className='text-xl text-blue-500'/>
          );
      default:
        return (<></>);

  }
}

export default IconGenerator