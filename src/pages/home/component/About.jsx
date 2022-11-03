import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
const About = () => {
  return (
    <div className="w-full h-[90vh] bg-cream flex px-16 ">
      <div className="w-2/5 h-full flex flex-col items-center justify-center gap-3">
        <img
          src="/images/hiking.jpg"
          className="w-[90%] h-[90%] object-cover rounded-3xl"
        />
      </div>
      <div className="w-3/5 h-full flex flex-col items-center justify-center gap-3">
        <div className="text-3xl font-grand text-tertiary text-center ">
          about camphin
        </div>
        <div className="text-5xl font-bold text-quaternary text-center">
          Camphin service
        </div>
        <div className="text-xl font-serif text-quaternary text-center">
          Camphin is a community for people who love hiking and camping. We
          provide a platform for people to share their experience and knowledge.
          We also provide a feature that enables us to meet people from all
          around the world who share our passion in hiking and camping.
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <div className="w-[150px] h-[200px] bg-[#fff8ef] rounded-xl flex flex-col items-center justify-center">
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_UgZWvP.json"
              style={{ height: '150px', width: '230px' }}
            />
            <div className="text-lg font-serif text-quaternary text-center">
              location
            </div>
          </div>
          <div className="w-[150px] h-[200px] bg-[#fff8ef] rounded-xl flex flex-col items-center justify-center">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_AFxIPvJHjK.json"
              style={{ height: '150px', width: '230px' }}
            />
            <div className="text-lg font-serif text-quaternary text-center">
              comunity
            </div>
          </div>
          <div className="w-[150px] h-[200px] bg-[#fff8ef] rounded-xl flex flex-col items-center justify-center">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/private_files/lf30_d92kodgw.json"
              style={{ height: '150px', width: '230px' }}
            />
            <div className="text-lg font-serif text-quaternary text-center">
              activity
            </div>
          </div>
          <div className="w-[150px] h-[200px] bg-[#fff8ef] rounded-xl flex flex-col items-center justify-center">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_7x83irfv.json"
              style={{ height: '150px', width: '230px' }}
            />
            <div className="text-lg font-serif text-quaternary text-center">
              security
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

// Camfin is more than just a platform. Because we are like family, that will make as much convenience and happiness as possible for everyone.
