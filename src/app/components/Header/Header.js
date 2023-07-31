"use client";
import './Header.css'
import Image from 'next/image'
import ayush from "../../asset/Ayush.png"
import { SearchIcon } from '@heroicons/react/outline'
import { PlusCircleIcon, HomeIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  const router = useRouter();
  const [searchVisibility, setSearchVisibility] = useState(true);
  const [crossVisibility, setCrossVisibility] = useState(false);
  const inputAreaRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (!inputAreaRef?.current?.contains(e.target)) {
        setSearchVisibility(true);
        setCrossVisibility(false);
      }
      else {
        setSearchVisibility(false);
        setCrossVisibility(true);
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    }
  }, [])

  return (
    <div className="headerContainer">
      <div className="flex-container">
        <div className="element">
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram Logo"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push('../../../')}
          />
        </div>
        <div ref={inputAreaRef} className="custom-container">
          {searchVisibility && <SearchIcon className="custom-search-icon" />}
          <input type="text" placeholder="search" className="custom-input" />
          {crossVisibility && <PlusCircleIcon className="custom-plus-icon" />}
        </div>
        <div className="custom-icon-container ">
          <div className="icon-container">
            <HomeIcon className="cursor-pointer" onClick={() => router.push('../../../')}/>
          </div>
          <div className='icon-container'>
            <FontAwesomeIcon className="cursor-pointer" icon={faFacebookMessenger} size="lg" />
            <span className="custom-badge">   3</span>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="cursor-pointer" icon={faHeart} size="lg" />
            <span className="dot"> </span>
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="cursor-pointer " icon={faPlusSquare} size="lg" />
          </div>
          <div className="icon-container">
            <FontAwesomeIcon className="cursor-pointer " icon={faCompass} size="lg" />
          </div>
          <Image className='custom-rounded-icon' src={ayush} onClick={() => router.push('../../components/')}/>
        </div>
      </div>
    </div >
  )
}

export default Header
