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

  // useRouter for routing between pages
  const router = useRouter();

  // random variables for search icon and cross icon
  const [searchVisibility, setSearchVisibility] = useState(true);
  const [crossVisibility, setCrossVisibility] = useState(false);

  const inputAreaRef = useRef(null);

  useEffect(() => {
    // function to check if clicked outside the input area
    const checkIfClickedOutside = e => {

      if (!inputAreaRef?.current?.contains(e.target)) {

        // set search visibility true if clicked outside the input area

        setSearchVisibility(true);
        setCrossVisibility(false);

      }
      else {

        // set search visibility false and cross visibility true if clicked inside the serach bar

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

        {/* instagram logo on the left side of the header */}
        
        <div className="element">
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram Logo"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push('../../../')}
          />
        </div>


        {/* search bar with search icon and cross icon */}

        <div ref={inputAreaRef} className="custom-container">
          {searchVisibility && <SearchIcon className="custom-search-icon" />}
          <input type="text" placeholder="search" className="custom-input" />
          {crossVisibility && <PlusCircleIcon className="custom-plus-icon" />}
        </div>


        {/* icons on the right side of the header */}

        <div className="custom-icon-container ">
          <div className="icon-container">
            <HomeIcon className="cursor-pointer" onClick={() => router.push('../../../')} />
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

          {/* on click of the profile icon, it will route to the profile page */}
          <Image className='custom-rounded-icon' alt="image" src={ayush} onClick={() => router.push('../../components/')} />
        </div>
      </div>
    </div >
  )
}

export default Header
