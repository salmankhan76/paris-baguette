import WhyParisImg from "../../../assets/images/Why-Paris-Baguette.jpeg";

const WhyParisContent = ({WhyParisCon}) => {
  return (
    <>
      <div className="why-paris-con">
        {WhyParisCon && (
          <div className="w-[100%] md:px-[20px] ">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-[#fff] font-special text-[#f6c844] md:text-[38px] text-[28px] leading-[40px]">
                Why Paris Baguette?
              </h3>
              <div className="border-2 border-[#f6c844] w-[116px] my-3"></div>
            </div>

            <div className="w-[93%] md:w-[80%] pt-10 mx-auto flex flex-col md:flex-row">
              <div className="w-[100%] md:w-[40%] ">
                <img src={WhyParisImg} alt="why-paris" />
              </div>
              <div className="w-[100%] md:w-[60%] md:pl-[50px] pl-0 md:mt-0 mt-5">
                <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5] my-2 mb-3">
                  Paris Baguette does two things better than any other
                  bakery/café franchise: a comfortable, inviting customer
                  experience and the highest-quality baked goods and coffees.
                  While other bakery concepts continue to transition into
                  full-service restaurants, leaving the lucrative segment
                  largely free of competition, Paris Baguette remains focused on
                  its mission to become the best neighborhood bakery café in the
                  world.
                </p>
                <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5] my-2 mb-3">
                  The brand has decades of experience, a globally beloved brand name with its 4,000 cafes, a proven record of 10 years in the U.S., best-in-class operations, support, and infrastructure leading to a strong $2,658,943 in average unit sales volume. 
                </p>
                <p className="font-basker text-left text-[#fff] text-[18px] leading-[1.5] my-2">
                  Paris Baguette opened more than 20 U.S. locations in 2020 and seeks to open 1,000 units across the country by 2030. Already, there are 52 new locations in the pipeline with an additional 30 franchise agreements in place. Even in difficult economic times, Paris Baguette has attracted franchisees that see the value in dominating the neighborhood bakery café space, and the brand’s sales have remained strong.
                </p>
                <div className="mt-5 flex justify-start items-center">
                  <button className="p-3 bg-[#f6c844] font-special text-[16px] text-[#081d5c]">
                    Apply To Own
                  </button>
                </div>
              </div>
            </div>

            
          </div>
        )}
      </div>
    </>
  );
};

export default WhyParisContent;
