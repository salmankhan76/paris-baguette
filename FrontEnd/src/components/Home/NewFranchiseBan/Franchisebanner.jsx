import React from "react";

const Franchisebanner = () => {
  return (
    <div className="bg-[#fbf8f1] lg:h-[750px] sm:h-auto">
      <div className="lg:container mx-auto sm:container">
        <div className="lg:w-[100%] lg:flex lg:flex-row lg:gap-16 sm:flex sm:flex-col">
          <div className="lg:w-[45%] sm:w-[100%]">
            <img src="/src/assets/images/parisbaguette.jpeg" alt="" className="lg:h-[750px] sm:h-auto"/>
          </div>
          <div className="lg:w-[55%] sm:w-[100%]">
            <div className="md:p-14 px-4 py-10">
              <div className="uppercase ">
                <h3 className="text-[#081d5c] font-special md:text-[35px] text-[24px] w-[100%] md:leading-[40px] leading-[30px]">
                  New Franchisee Signings & Openings
                </h3>
              </div>
              <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
              <div className="font-basker text-[20px] leading-[1.5] my-2">
                Paris Baguette continues record growth as the bakery café
                concept takes more steps toward crossing over the 150-location
                mark with signing 40 franchise agreements and 13 new locations
                already opened in 2023.
              </div>
              <div className="flex md:flex-row flex-col gap-8 w-[100%] mt-4">
                <div className="md:w-[50%] w-full">
                 <div className="font-special text-[25px] text-[#081d5c]">Recent Signings</div>
                 <div className="text-[20px] font-basker">Fresno, CA</div>
                 <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                 <div className="text-[20px] font-basker mt-1">San Jose, CA</div>
                 <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                 <div className="text-[20px] font-basker mt-1">Irvine, CA</div>
                 <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                 <div className="text-[20px] font-basker mt-1">Culver City, CA</div>
                 <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                 <div className="text-[20px] font-basker mt-1">Atlanta, GA</div>
                 <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                </div>
                <div className="md:w-[50%] w-full">
                <div className="font-special text-[25px] text-[#081d5c]">Recent Openings</div>
                <div className="text-[20px] font-basker mt-1">Montvale, NJ</div>
                <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                <div className="text-[20px] font-basker mt-1">New York City, NY</div>
                <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                <div className="text-[20px] font-basker mt-1">Cincinnati, OH</div>
                <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                <div className="text-[20px] font-basker mt-1">Multiple Locations, CA</div>
                <div className=""><button className="text-[18px] text-[#081d5c] font-special">Read More on 1851</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchisebanner;
