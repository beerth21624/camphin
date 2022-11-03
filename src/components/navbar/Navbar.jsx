import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { MdEmojiEvents } from 'react-icons/md'
import { FaHiking } from 'react-icons/fa'
import { GiCampfire } from 'react-icons/gi'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()
  let location = useLocation()
  const path = location.pathname.split('/')[1]
  console.log(path)

  function changePage(path) {
    navigate(`/${path}`)
  }
  return (
    <div className="shadow-2xl w-full h-[90px] bg-while flex items-center justify-between px-4 sticky top-0 z-10">
      <div className="flex items-line gap-2">
        <div className="text-quaternary font-bold text-4xl">CAMPHIN</div>
        <GiCampfire className="text-quaternary font-bold text-3xl text-white" />
      </div>
      <div className="flex items-center ">
        <div
          className={`text-lightbrown font-serif text-lg mr-5 cursor-pointer ${
            path == '' ? 'border-b-2 border-dashed border-tertiary' : ''
          }`}
          onClick={() => changePage('')}
        >
          home
        </div>
        <div className="text-lightbrown font-serif text-lg mr-5 cursor-pointer ">
          activity
        </div>
        <div
          className={`text-lightbrown font-serif text-lg mr-5 cursor-pointer ${
            path == 'location' ? 'border-b-2 border-dashed border-tertiary' : ''
          }`}
          onClick={() => changePage('location')}
        >
          location
        </div>
        <div className="text-lightbrown font-serif text-lg mr-5 cursor-pointer">
          campfire
        </div>
        <div className="text-lightbrown font-serif text-lg mr-5 cursor-pointer">
          camptip
        </div>
        <div className="text-lightbrown font-serif text-lg mr-5 cursor-pointer">
          about
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button className="bg-secondary font-serif text-while font-bold text-lg  rounded-lg h-9 w-[150px]">
          sign up
        </button>
        <button className="bg-primary font-serif text-while font-bold text-lg  rounded-lg h-9 w-[150px]">
          sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar
