import React from 'react'

const CardRank = ({ colorName, rank }) => {
  return (
    <div
      className={`w-[380px] h-[430px] bg-${colorName} rounded-3xl overflow-hidden shadow-xl`}
    >
      <img
        src="/images/user.jpg"
        className="w-full h-2/3 object-cover object-center "
      />
      <div className="relative text-3xl text-while font-serif font-bold ">
        <span className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {rank}
        </span>
      </div>
    </div>
  )
}

const Rank = () => {
  return (
    <div className="w-full h-[100vh] bg-while ">
      <div className="h-full flex flex-col justify-center items-center gap-3">
        <div className="text-2xl font-grand text-tertiary">camphin rank</div>
        <div className="text-7xl font-bold text-quaternary mb-8">
          Top 3 of the brave
        </div>
        <div className="flex align-center gap-6">
          <CardRank colorName="tertiary" rank="1ST" />
          <CardRank colorName="secondary" rank="2ND" />
          <CardRank colorName="primary" rank="3RD" />
        </div>
      </div>
    </div>
  )
}

export default Rank
