import "./ApplyOwnTop.css";
import { CaretDownOutlined } from "@ant-design/icons";

const ApplyOwnTop = () => {


  return (
    <>
      <div className="pb-applyown w-full bg-[#fbf8f1]">
        <div className="container mx-auto">
          <div className="lg:flex lg:w-[90%] lg:flex-row justify-center m-auto gap-12 py-12 sm:flex sm:flex-col sm:w-[100%]">
            <div className="lg:w-[100%] sm:w-[100%]">
              <div className="uppercase ">
                <h3 className="pb-applyown-hdg text-[#081d5c] font-special leading-[40px] text-center">
                  Apply To Own A Bakery Café
                </h3>
              </div>
              {/* <div className="border-2 border-[#f6c844] w-[116px] my-3"></div> */}
              <div className="font-basker text-[24px] leading-[1.5] my-2 text-center">
                Complete the form below to start a conversation about owning a
                Paris Baguette.
              </div>

              <div className="apply-own-form mt-5">
                <form className="w-full max-w-4xl mx-auto">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                      <input
                        className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                        id="grid-last-name"
                        type="text"
                        placeholder="First Name*"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <input
                        className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                        id="grid-last-name"
                        type="text"
                        placeholder="Last Name*"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                      <input
                        className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                        id="grid-last-name"
                        type="tel"
                        placeholder="Phone*"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <input
                        className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                        id="grid-last-name"
                        type="email"
                        placeholder="Email*"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                      <input
                        className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                        id="grid-last-name"
                        type="text"
                        placeholder="City*"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-white-500 text-black-700 border-0 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-0"
                          id="grid-state"
                        >
                          <option className="opacity-40">New Mexico</option>
                          <option className="opacity-40">Missouri</option>
                          <option className="opacity-40">Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black-700 opacity-40">
                          <CaretDownOutlined />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row -mx-1 mb-5">
                    <label> Minimum liquid capital investment is $500,000. Do You Meet This Requirement? </label>
                    <div className="sm:ml-0 lg:ml-4 mb-6 md:mb-0 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <input id="invest-radio-yes" type="radio" defaultValue="" name="investment"
                                className="w-4 h-4 text-[#081d5c] bg-gray-100 border-[#081d5c] focus:ring-[#081d5c] focus:bg-[#081d5c]"
                                checked
                            />
                            <label htmlFor="invest-radio-yes" className="font-medium text-gray-900 dark:text-gray-300">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input id="default-radio-no" type="radio" defaultValue="" name="investment"
                                className="w-4 h-4 text-[#081d5c] bg-gray-100 border-[#081d5c] focus:ring-[#081d5c] focus:bg-[#081d5c]"
                            />
                            <label htmlFor="default-radio-no" className="font-medium text-gray-900 dark:text-gray-300">
                                No
                            </label>
                        </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row -mx-1">
                    <label> Do you have a net worth of at least $1.5 million? </label>
                    <div className="sm:ml-0 lg:ml-4 mb-6 md:mb-0 flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <input id="worth-yes" type="radio" defaultValue="" name="worth"
                                className="w-4 h-4 text-[#081d5c] bg-gray-100 border-[#081d5c] focus:ring-[#081d5c] focus:bg-[#081d5c]"
                                checked
                            />
                            <label htmlFor="worth-yes" className="font-medium text-gray-900 dark:text-gray-300">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input id="worth-no" type="radio" defaultValue="" name="worth"
                                className="w-4 h-4 text-[#081d5c] bg-gray-100 border-[#081d5c] focus:ring-[#081d5c] focus:bg-[#081d5c]"
                            />
                            <label htmlFor="worth-no" className="font-medium text-gray-900 dark:text-gray-300">
                                No
                            </label>
                        </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button className="py-2 px-[50px] bg-[#f6c844] font-special text-[20px] text-[#081d5c]">
                        Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyOwnTop;
