import React from 'react'

const Header = () => {
  return (
    <div className="flex flex-col w-full h-[90vh] relative">
      <img
        src="/images/homemain2.jpg"
        className="object-cover brightness-50 w-full h-full "
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col gap-5">
          <div className="text-3xl font-grand text-secondary text-center ">
            hiking and camping community
          </div>
          <div className="text-6xl font-bold text-while text-center">
            Welcome the brave to !
          </div>
          <div className="text-7xl font-bold text-while text-center">
            CamPhin
          </div>
          <div className="flex justify-center">
            <button className="bg-tertiary font-serif text-while font-bold text-lg  rounded-lg h-10 w-[200px] hover:first-letter:s">
              join activity
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
