import React from 'react'
import Map from '../../../assets/svgs/Map'

const GrowingBanner = () => {
  return (
    <div className="container mx-auto">
    <div className="lg:flex lg:w-[90%] lg:flex-row justify-center m-auto gap-12 my-12 sm:flex sm:flex-col sm:w-[100%]">
      <div className='md:w-[45%] w-[93%] mx-auto'>
        <div className="uppercase "><h3 className='text-[#081d5c] font-special text-[35px] w-[300px] leading-[40px]'>Where We Are Growing</h3></div>
        <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
        <div className="font-basker text-[20px] leading-[1.5] my-2">Paris Baguette has 4,000 units worldwide, more than 150 units open in 30 states, and is working toward reaching the 1,000-unit mark in the States by 2030. After a great end to 2022, the concept has kicked off 2023 with a bang, signing 40 franchise agreements and opening a restaurant/week.</div>
        <div className="my-8"><button className='p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]'>Apply To Own</button></div>
      </div>
      <div className="lg:w-[45%] w-[95%] mx-auto flex flex-col items-center">
        <div className="w-full flex"><Map className="sm:w-[100px]"/></div>
        <div className="flex w-[100%] m-auto  font-basker gap-6">
            <div className="w-[45%] font-basker flex gap-2 items-center">
                <div className="bg-[#f6c844] w-[20px] h-[20px] rounded-full"></div>
                <div className="text-[18px]">Target Markets</div>
            </div>
            <div className="w-[45%] font-basker flex gap-2 items-center">
            <div className="bg-[#081d5c] w-[20px] h-[20px] rounded-full"></div>
                <div className="text-[18px]">Avaliable Markets</div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default GrowingBanner
