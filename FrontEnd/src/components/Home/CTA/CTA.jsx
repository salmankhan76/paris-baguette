import "./CTA.css";

const CTA = () => {
  return (
    <>
      <div className="pb-cta">
        <div className="container mx-auto">
          <div className="lg:w-[50%] sm:w-[100%] py-[50px]  px-[20px] sm:px-[5%]">
            <h3 className="text-[#fff] font-special md:text-[38px] text-[28px] leading-[40px]">
              Ready to Get Started?
            </h3>
            <p className="font-basker text-[#fff] text-[20px] leading-[1.5] my-2">
              Learn more about franchising with Paris Baguette
            </p>
            <div className="mt-8 flex gap-[20px] md:flex-row flex-col">
              <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                Apply To Own
              </button>
              <button className="p-3 bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
